from app.auth_deps import get_current_user
from fastapi import FastAPI, Path, Depends,HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm

from app.models import Player, TokenSchema, User
from app.utils import ( 
    create_access_token,
    create_refresh_token,
    get_hashed_password,
    verify_password,
    get_user_from_db 
)

app = FastAPI()

@app.get("/")
def home():
   return  { "message": "Muslim League API"}

@app.post("/signup", summary="Create new user", response_model=User)
def signup(user: User):
    
    hashpass = get_hashed_password(user.password)
    user = {
        'username': user.username,
        'password': hashpass
    }     
    return user


@app.post("/login",summary="Create access and refresh tokens for user", response_model=TokenSchema)
def login(form_data: OAuth2PasswordRequestForm = Depends()):

    input_username = form_data.username  
    input_password = form_data.password 

    user_info = get_user_from_db(input_username,get_passwd=True)   

    if not verify_password(input_password,user_info.password):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect username or password"
        )

    return {
        "access_token": create_access_token(user_info.username),
        "refresh_token" : create_refresh_token(user_info.username)
    } 


@app.get("/me", summary='Get details of currently logged in user', response_model=User)
def get_me(user: User = Depends(get_current_user)):
    return user;


players = { }

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