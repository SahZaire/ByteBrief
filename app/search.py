import pandas as pd
from flask import jsonify, Response
import os

def searchText(keywords):
    current_directory = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(current_directory, "FinalData.csv")
    file_path = os.path.normpath(file_path)

    data = pd.read_csv(file_path)
    relevant_articles = []
    keywords = keywords.lower()

    for index, row in data.iterrows():
        headline = row["title"].lower()

        if all(keyword in headline for keyword in keywords.split()):
            relevant_articles.append({
                "source_name": row["source_name"],
                "author": row["author"],
                "title": row["title"],
                "description": row["description"],
                "url": row["url"],
                "url_to_image": row["url_to_image"],
                "published_at": row["published_at"],
                "category": row["category"],
                "full_content": row["full_content"]
            })

    if not relevant_articles:
        result = ''
    else:
        result = relevant_articles

    return result