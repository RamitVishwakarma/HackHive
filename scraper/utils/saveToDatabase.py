from datetime import datetime
from db.dbConnect import client

class Hackathon:
    def __init__(self, link, name, date, image, location, prizes, participants, themes, status, featured, source):
        self.link = link
        self.name = name
        self.date = date
        self.image = image
        self.location = location
        self.prizes = prizes
        self.participants = participants
        self.themes = themes
        self.status = status
        self.featured = featured
        self.source = source

    def save_to_db(self):
        db_name = "HackHive"
        col_name = "hackathon"
        db = client[db_name]
        col = db[col_name]
        col.insert_one(self.to_dict())

    def to_dict(self):
        return {
            "link": self.link,
            "name": self.name,
            "date": self.date,
            "image": self.image,
            "location": self.location,
            "prizes": self.prizes,
            "participants": self.participants,
            "themes": self.themes,
            "status": self.status,
            "featured": self.featured,
            "source": self.source,
            "created_at": datetime.now()
        }

    @staticmethod
    def clear_database():
        db_name = "HackHive"
        col_name = "hackathon"
        db = client[db_name]
        col = db[col_name]
        col.delete_many({})