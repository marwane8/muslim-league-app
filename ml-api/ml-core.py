
from fastapi import FastAPI, Path
from pydantic import BaseModel

app = FastAPI()

class Player(BaseModel):
    name: str
    pos: str | None = None
    age: int


players = {
    1 : {
        "name" : "Ahmed",
        "pos": "C" ,
        "age": 22
    }
}

@app.get("/")
def home():
    return {"Data" : "TEST"}

#Path parameter
@app.get("/get-player/{player_id}")
def get_player(player_id: int = Path(None,description="The ID of a player")):
    return players[player_id] 

#Example Query Parameter
@app.get("/get-by-name")
def get_player_name(name: str | None = None):
    for player_id in players:
        print(player_id)
        if players[player_id]["name"] == name:
            return players[player_id]
    return {"Data" : "Not Found"}


#Post method
@app.post("/create-player/{player_id}")
def create_player(player_id: int, player: Player):
    if player_id in players:
        return {"Error": "Item ID already exsists."}
    players[player_id] = player
    return players[player_id]

