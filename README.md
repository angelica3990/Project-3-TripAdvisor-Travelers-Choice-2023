# Project-3-TripAdvisor-Travelers-Choice-2023
# About the Project

Do you like to travel? In this project, we are using the data collected from Tripadvisor's top 25 Traveler’s Choice Awards to make an interactive dashboard.

# Language Used
* Python: Beautiful Soup, Pandas, SQL Alchemy
* Javascript
* HTML
* CSS
* PostgreSQL


# Getting Started(Preparing the Data)

### 1. Source of data:

Web scraping from [Tripadvisor's top 25 Traveler’s Choice Award ]( https://www.tripadvisor.com/TravelersChoice)

The categories that we will be using are:
* Destinations
* Beaches
* Hotels
* Restaurants
* Things to Do

### 2. Installation for web scraping using Jupyter Notebook
```bash
# Import BeautifulSoup and splinter
from bs4 import BeautifulSoup as soup

# Import other dependencies
import time
import pandas as pd
import numpy as np
from pathlib import Path
import requests
import json

# Import geoapify api key
from config import geoapify_key
```

### 3. Get the result files in CSV from each category
Each category (except destinations) has two files: 

* data
* reviews
### 4. Read the CSV files in Jupyter Notebook and clean the data

* Concatenate `Category` and `Rank` to create a new column called `ID` for data and reviews
* Use the `ID` column as the primary key and merge data and reviews data frames for each category
* Drop `review_url` column in each data frame

### 5. Export the dataframe to CSV and JSON


# Import to Database
Import the all_merged.csv into the Postgresql database using SQL Alchemy



# Processing Data for Visualization
