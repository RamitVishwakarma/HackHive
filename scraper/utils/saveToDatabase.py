from db.dbConnect import client

def addHackathonsToMongoDB(hackathon_data):
    db_name = "hackathons"
    col_name = "hackathon_data"
    db = client[db_name]
    col = db[col_name]
    col.delete_many({})
    for hackathon in hackathon_data:
        col.insert_one(hackathon)
            