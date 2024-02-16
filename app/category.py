import os
import pandas as pd
from flask import jsonify, Response

current_directory = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(current_directory, "FinalData.csv")
file_path = os.path.normpath(file_path)
data = pd.read_csv(file_path)

def get_cat(keywords):
   
    keywords_lower = [kw.lower() for kw in keywords]

    relevant_articles = data[data["category"].str.contains('|'.join(keywords_lower), case=False, na=False)]

    relevant_articles_list = relevant_articles.to_dict(orient='records')

    return relevant_articles_list


def myCategory(query):
     
    my_cat_art = get_cat(query)
    return my_cat_art