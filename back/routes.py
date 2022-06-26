from flask_restful import Resource
from flask import jsonify
from conexion import Conexion
from conversiones import object_json

class Caballeros(Resource):
    def get(self):
        detalles = Conexion.collection.find()
        data = object_json(detalles)
        return jsonify({"data": data}) 