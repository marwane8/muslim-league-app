from pydantic import BaseModel 

class TokenSchema(BaseModel):
    access_token: str
    refresh_token: str

class TokenPayload(BaseModel):
    sub: str = None
    exp: int = None

class User(BaseModel):
    username: str
    password: str | None = None
    admin: int = 0 

class Player(BaseModel):
    id: int
    name: str | None = None
    pos: str
