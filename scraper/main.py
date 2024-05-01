import schedule
import time

from sites.devpost.devpost import scrapeDevpost
from utils.saveToDatabase import addHackathonsToMongoDB
from sites.devfolio.devfolio import scrapeDevfolio

def scrape_and_save():
    devfolioHackthons = scrapeDevfolio()
    devpostHackthons = scrapeDevpost()
    hackathons = devfolioHackthons + devpostHackthons
    addHackathonsToMongoDB(hackathons)

def job():
    print("Scraping and saving data")
    scrape_and_save()
    print("Data saved successfully")

schedule.every().hour.do(job)

while True:
    schedule.run_pending()
    time.sleep(1)
