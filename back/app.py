from flask import Flask
from flask_restful import Api
from routes import Caballeros
from conexion import Conexion
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
api = Api(app)
Conexion()
api.add_resource(Caballeros, '/')

if __name__ == '__main__':
    app.run(debug=True)