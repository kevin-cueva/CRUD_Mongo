def object_json(data):
    array = []
    for item in data:
        registro ={"id":str(item['_id']),
        "nombre":item['nombre'],
        "signo":item['signo']}
        array.append(registro)
    return array