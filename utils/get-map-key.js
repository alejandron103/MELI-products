export function getMapKey(key, mapObject){
    console.log(mapObject)
    if(mapObject.has(key)) {
        return mapObject.get(key)
    }
    return 'no se encontro la llave'
}