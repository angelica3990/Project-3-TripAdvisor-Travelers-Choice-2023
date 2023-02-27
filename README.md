<img align=left src="https://github.com/angelica3990/Project-3-TripAdvisor-Travelers-Choice-2023/blob/main/images/logoandtext.png">

# Project-3-TripAdvisor-Travelers-Choice-2023
## About the Project

Do you like to travel? In this group project, we are using the data collected from Tripadvisor's top 25 Traveler’s Choice Awards to make an interactive dashboard.


## Contributors
  
- Geetha Kandukuri
- Angelica Hussar
- Jasmine Huang

## Table of contents

- [About the Project](#about-the-project)
- [Language Used](#language-used)
- [Preparing the Data](#preparing-the-data)
- [Import to Database](#import-to-database)
- [Processing Data for Visualization](#processing-data-for-visualization)


## Language Used
* Python: Beautiful Soup, Pandas, SQL Alchemy
* Javascript
* HTML
* CSS
* PostgreSQL


# Preparing the Data

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

# Import geoapify api key (to get latitude and longitude for leaflet maps)
from config import geoapify_key
```

### 3. Get the result files in CSV from each category
Each category (except destinations) has two files: 

* data
* reviews
### 4. Read the CSV files in Jupyter Notebook and clean the data

* Concatenate `Category` and `Rank` to create a new column called `ID` as unique ID for both data and reviews files
* Use the `ID` column as the primary key and merge data and reviews data frames for each category
* Drop `review_url` column in each data frame

### 5. Export the dataframe to CSV and JSON


# Import to Database
1. Create a database called `Project3` in PostgreSQL
2. Create a table called data under the `Project3` database
```
create table data (
   id varchar primary key,
   category varchar,
   rank int,
    name varchar,
   location varchar,
    imageurl varchar,
    description varchar,
    latitude float(24),
    longitude float(24),
    rate float(24),
    total_reviews int,
    excellent int,
    very_good int,
    average int,
    poor int,
    terrible int
);
```

3. Import the merged data frame into the Postgresql database using Python (SQL Alchemy)



# Processing Data for Interactive Visualization

1. Dashboard with menu option to select category for viewing the data

2. Use Javascript to populate leaflet map for the category chosen with markers for each locations in the Top 25 for the category

3. Use Plotly to create donut charts that displays the count of customer reviews (categorized for Excellent, Very Good, Average, Poor and Terrible)

4. Use d3.js to build list of images from the image url scrapped and display the images

5. Cooperate with HTML and custom CSS to finish our dashbaord



# Main Takeaways from this project

1. Planned for a visualization exercise covering many skillsets

2. ETL covering web scraping, API, data wrangling and handling multiple formats of data (csv, json, SQL)

3. Beautiful visualization from dashboard using javascript libraries d3, leaflet and Plotly subplots

4. Web rendering using custom HTML and css

<img align=left src="https://github.com/angelica3990/Project-3-TripAdvisor-Travelers-Choice-2023/blob/main/images/dashboard.png">
