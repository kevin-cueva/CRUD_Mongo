import pymongo
class Conexion:
     
    client = pymongo.MongoClient("mongodb://localhost:27017") #Conexión local
    db = client['crud'] #Creando Base de datos
    collection = db['caballeros'] #Creando coleccion

    
