from ast import parse
from flask_restful import Resource, reqparse
from flask import jsonify, request
from conexion import Conexion
from conversiones import object_json
from bson import ObjectId

class Caballeros(Resource):
    def get(self):
        detalles = Conexion.collection.find()
        data = object_json(detalles)
        return jsonify(data) 
    def post(self):
        data = request.json
        Conexion.collection.insert_one(data)
        return jsonify({"message":"successfully"})
    def delete(self):
        id = request.json['id']
        #Buscalo y si existe eliminalo
        data = Conexion.collection.find_one_and_delete({'_id': ObjectId(id)})
        if(data):
            return jsonify({"messages":'true'})
        else:
            return jsonify({"messages":'false'})
        

