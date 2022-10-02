from typing import Any
from datetime import datetime, timedelta
from fastapi import HTTPException, status

from app.models import User

from jose import jwt
from passlib.context import CryptContext

import os
import sqlite3

# JWT Constants
ACCESS_TOKEN_EXPIRE_MINUTES = 30 # 30 minutes
REFRESH_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7 # 7 days
ALGORITHM = "HS256"
JWT_SECRET_KEY = os.environ['JWT_SECRET_KEY']
JWT_REFRESH_SECRET_KEY = os.environ['JWT_REFRESH_SECRET_KEY']

# DB Constants
DB_URL = "./muslim-league.db"

# JWT Creation Utilities
def create_access_token(subject: str | Any, expires_delta: int = None) -> str:
    if expires_delta is not None:
        expires_delta = datetime.utcnow() + expires_delta
    else:
        expires_delta = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode = {"exp": expires_delta, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode,JWT_SECRET_KEY,ALGORITHM)
    return encoded_jwt

def create_refresh_token(subject: str | Any, expires_delta: int = None) -> str:
    if expires_delta is not None:
        expires_delta = datetime.utcnow() + expires_delta
    else:
        expires_delta = datetime.utcnow() + timedelta(minutes=REFRESH_TOKEN_EXPIRE_MINUTES)

    to_encode = {"exp": expires_delta, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode,JWT_REFRESH_SECRET_KEY,ALGORITHM)
    return encoded_jwt


# Password Hashing Utilities
password_context = CryptContext(schemes=["bcrypt"],deprecated="auto")

def get_hashed_password(password: str) -> str:
    return password_context.hash(password)

def verify_password(password: str, hashed_pass: str) -> bool:
    return password_context.verify(password, hashed_pass)

# DB Access Utilities

def get_user_from_db(username: str,get_passwd: bool = False) -> User | None:
    user: User | None = None
    try:
        connection = sqlite3.connect(DB_URL)
        cursor = connection.cursor()
        print("Connected to SQLite ")

        query = "SELECT username,admin,password FROM Users WHERE username = ?"

        cursor.execute(query,(username,))
        record = cursor.fetchone() 
        if record == None:
            print("The User Not Found: ", username)
        else:
            user = User(
                username=record[0],
                admin=record[1]
            )
            if get_passwd: user.password=record[2]
        cursor.close()
    except sqlite3.Error as error:
        print("Failed to read row from database table", error)
    finally:
        if connection:
            connection.close()
            print("SQLite connection closed")

    return user 
