from flask import Flask
from flask_restful import Api
from routes import Caballeros
from conexion import Conexion
app = Flask(__name__)
api = Api(app)
Conexion()
api.add_resource(Caballeros, '/')

if __name__ == '__main__':
    app.run(debug=True)