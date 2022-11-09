from app.auth_deps import get_current_user
from fastapi import FastAPI, Path, Depends,HTTPException, Response, status
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

import os

from app.models import Player,Team, User, UserJSON
from app.utils import ( 
    create_access_token,
    verify_password,
    get_user_from_db 
)

from app.db_accessor import (
    create_standings,
    get_team_roster
)

app = FastAPI()

origins = [
  "http://localhost:3000",
  "https://www.muslimleaguect.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return  { "message": "The Muslim League API"}


@app.post("/login",summary="Create access and refresh tokens for user", response_model=UserJSON)
def login(response: Response,form_data: OAuth2PasswordRequestForm = Depends()):

    input_username = form_data.username  
    input_password = form_data.password 

    user_info = get_user_from_db(input_username,get_passwd=True)   

    if not user_info or not verify_password(input_password,user_info.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password"
        )
    jwtToken = create_access_token(user_info.username,admin=user_info.admin)
    response.set_cookie(key="token", value=jwtToken,secure=True)

    user_json = {
        "username": user_info.username,
        "admin": user_info.admin
    }

    return user_json

@app.get("/logout",summary="Logs out user and clears cookies")    
def logout(user: User = Depends(get_current_user)):
    message = {"message" : "Logout Success"}
    response = JSONResponse(content=message) 
    response.set_cookie(key="token", value="",secure=True)
    return response

@app.get("/standings/{season_id}" , response_model=list[Team])
def get_roster(season_id: int = Path(None,description="The ID of a Season")):
    standings = create_standings(season_id)
    return standings 

@app.get("/roster/{team_id}" , response_model=list[Player])
def get_roster(team_id: int = Path(None,description="The ID of a Team")):
    roster = get_team_roster(team_id)
    return roster 