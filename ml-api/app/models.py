from pydantic import BaseModel 

class TokenSchema(BaseModel):
    access_token: str
    refresh_token: str

class TokenPayload(BaseModel):
    exp: int = None
    sub: str = None
    admin: bool = False 

class User(BaseModel):
    username: str
    password: str | None = None
    admin: int = 0 

class UserJSON(BaseModel):
    username: str
    admin: int = 0

class Player(BaseModel):
    id: int
    name: str | None = None
    pos: str
