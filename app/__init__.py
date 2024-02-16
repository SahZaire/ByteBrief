from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

from app import routes
from app import search
from app import api
from app import summary
from app import feed
from app import recommendation
from app import search
from app import category
from app import random