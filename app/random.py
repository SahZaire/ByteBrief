import pandas as pd
from flask import jsonify, Response
import os
import random
current_directory = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(current_directory, "FinalData.csv")
file_path = os.path.normpath(file_path)
data = pd.read_csv(file_path)


def getRandomNews(num_articles):
    # Select random indices from the dataset
    random_indices = random.sample(range(len(data)), min(num_articles, len(data)))

    # Get random news articles
    random_articles = []
    for random_index in random_indices:
        random_article = {
            "source_name": data.loc[random_index, "source_name"],
            "author": data.loc[random_index, "author"],
            "title": data.loc[random_index, "title"],
            "description": data.loc[random_index, "description"],
            "url": data.loc[random_index, "url"],
            "url_to_image": data.loc[random_index, "url_to_image"],
            "published_at": data.loc[random_index, "published_at"],
            "category": data.loc[random_index, "category"],
            "full_content": data.loc[random_index, "full_content"]
        }
        random_articles.append(random_article)

    return random_articles
