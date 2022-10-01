
from fastapi import FastAPI, Path
from pydantic import BaseModel
import sqlite3

from app.models import Player

app = FastAPI()



players = { }


@app.get("/")
def home():
    conn = sqlite3.connect('./muslim-league.db')
    currsor = conn.execute("SELECT player_name, player_pos FROM PLAYERS WHERE ID=1")
    for row in currsor:
        player = Player(name=row[0],pos=row[1],id=0)
    conn.close()
    return player 

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

