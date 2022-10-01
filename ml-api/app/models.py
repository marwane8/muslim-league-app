from pydantic import BaseModel

class Player(BaseModel):
    id: int
    name: str | None = None
    pos: str
