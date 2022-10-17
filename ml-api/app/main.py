from app.auth_deps import get_current_user
from fastapi import FastAPI, Path, Depends,HTTPException, Response, status
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from app.models import Player, TokenSchema, User, UserJSON
from app.utils import ( 
    create_access_token,
    create_refresh_token,
    get_hashed_password,
    verify_password,
    get_user_from_db 
)

app = FastAPI()

origins = [
  "http://localhost:3000"  
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
   return  { "message": "Muslim League API"}

#TODO: Fix SignUp Page
@app.post("/signup", summary="Create new user", response_model=User)
def signup(user: User):
    
    hashpass = get_hashed_password(user.password)
    user = {
        'username': user.username,
        'password': hashpass
    }     
    return user


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

@app.get("/me", summary='Get details of currently logged in user', response_model=User)
def get_me(user: User = Depends(get_current_user)):
    return user;


player = {
    "id":1,
    "name":"Mike",
    "pos":"C"

}
players = {}
players[1] = player

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