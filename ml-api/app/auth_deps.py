from datetime import datetime
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer

from app.models import TokenPayload, User
from app.utils import ALGORITHM,JWT_SECRET_KEY,get_user_from_db

from jose import jwt
from pydantic import ValidationError

reuseable_oauth = OAuth2PasswordBearer(
    tokenUrl="/login",
    scheme_name="JWT"
) 

def get_current_user(token: str = Depends(reuseable_oauth)) -> User:
    try:
        payload = jwt.decode( token, JWT_SECRET_KEY, algorithms=[ALGORITHM])
        token_data =  TokenPayload(**payload)
        print(token_data)
        if datetime.fromtimestamp(token_data.exp) < datetime.now():
            raise HTTPException(
                status_code = status.HTTP_401_UNAUTHORIZED,
                detail = "Token expired",
                headers={"WWW-Authenticate": "Bearer"}
            )
    except(jwt.JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"}
        )
    username = token_data.sub
    user = get_user_from_db(username) 

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Could not find user"
        )
    
    return user