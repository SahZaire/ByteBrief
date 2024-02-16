import os
import pandas as pd
from flask import jsonify, Response

current_directory = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(current_directory, "FinalData.csv")
file_path = os.path.normpath(file_path)
data = pd.read_csv(file_path)

def get_all():
    df_slice = data.head(50)
    data_list = df_slice.to_dict(orient='records')
    return data_list
