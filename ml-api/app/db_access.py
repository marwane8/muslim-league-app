import sqlite3

from app.models import Player 
from app.models import Team 

# DB Constants
DB_URL = "./database/muslim-league.db"

def get_team_roster(team_id: int) -> list[Player]:
    roster: list[Player] = []
    try:
        connection = sqlite3.connect(DB_URL)
        cursor = connection.cursor()
        print("Opening SQLite Connection")

        query = "SELECT id,player_name,player_number,player_pos FROM roster WHERE team_id = ?"

        cursor.execute(query,(team_id,))
        record = cursor.fetchall()
        if record == []:
            print("Team ID Not Found: ", team_id)
        else:
            print(record)
            for p_info in record:
                p_id,p_name,p_num,p_pos = p_info
                roster.append(Player(id=p_id,name=p_name,number=p_num,pos=p_pos))
        cursor.close()
    except sqlite3.Error as error:
        print("Failed to read row from database table: ", error)
    finally:
        if connection:
            connection.close()
            print("Closing SQLite Connection")

    return roster 


def create_standings(season_id: int) -> list[Team]:
    standings: list[Team] = [] 
    try:
        connection = sqlite3.connect(DB_URL)
        cursor = connection.cursor()
        print("Opening SQLite Connection")

        query = "SELECT team_id,team_name,wins,losses,PF,PA FROM Teams WHERE season_id=?"

        cursor.execute(query,(season_id,))
        record = cursor.fetchall()
        if record == []:
            print("Not Teams found for Season ID : ", season_id)
        else:
            for team_data in record:
                diff = team_data[4] - team_data[5]
                team_id,team_name,w,l = team_data[0:4] 
                team = Team(id=team_id,name=team_name,wins=w,loss=l,diff=diff)
                standings.append(team)
                standings.sort(key=lambda t: (-t.wins, -t.diff))
        cursor.close()
    except sqlite3.Error as error:
        print("Failed to read row from database table: ", error)
    finally:
        if connection:
            connection.close()
            print("Closing SQLite Connection")

    return standings 

print(get_team_roster(16))
