export function getMapKey(key, mapObject){
    if(mapObject.has(key)) {
        return mapObject.get(key)
    }
    return 'no se encontro la llave'
}