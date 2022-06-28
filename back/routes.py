from ast import parse
from flask_restful import Resource, reqparse
from flask import jsonify, request
from conexion import Conexion
from conversiones import object_json

class Caballeros(Resource):
    def get(self):
        detalles = Conexion.collection.find()
        data = object_json(detalles)
        return jsonify({"data": data}) 
    def post(self):
        data = request.json
        Conexion.collection.insert_one(data)
        return jsonify({"message":"successfully"})