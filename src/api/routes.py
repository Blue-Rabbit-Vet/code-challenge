from flask import Flask, request, jsonify
from api.introduction_endpoint import Introduction
from flask_restful import Resource, Api, reqparse
import pandas as pd 
import ast

app = Flask(_name_)
api = Api(app)

@api.route('/introduction', methods=['GET'])
def introduction():
    return "My name is Taylor Hart and I want to be a junior developer", 200