import schedule
import time

from sites.devpost.devpost import scrapeDevpost
from utils.saveToDatabase import Hackathon
from sites.devfolio.devfolio import scrapeDevfolio

def scrape_and_save():
    devfolio_hackathons = scrapeDevfolio()
    devpost_hackathons = scrapeDevpost()
    
    all_hackathons = devfolio_hackathons + devpost_hackathons
    Hackathon.clear_database()
    for hackathon_data in all_hackathons:
        hackathon = Hackathon(**hackathon_data)
        hackathon.save_to_db()


def job():
   try:
        print("Scraping and saving data")
        scrape_and_save()
        print("Data saved successfully")
   except:
        print("Error in scraping and saving data")
        job()
    
schedule.every().hour.do(job)

while True:
    schedule.run_pending()
    time.sleep(1)
