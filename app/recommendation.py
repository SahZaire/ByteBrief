
import os
import pandas as pd

current_directory = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(current_directory, "FinalData.csv")
file_path = os.path.normpath(file_path)


df = pd.read_csv(file_path)
def getRecc(keywords):
    related_articles = []

    sorted_keywords = sorted(keywords, key=keywords.get, reverse=True)
    for keyword in sorted_keywords:
        found_articles = df[df['title'].str.contains(keyword, case=False)]        
        if not found_articles.empty:
            related_articles.extend(found_articles.head(2).to_dict('records'))

    return related_articles


def myRec(listKey):
   
    rec_art = getRecc(listKey)

    return rec_art