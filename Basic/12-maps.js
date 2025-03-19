//map, sirve para estructurar datos en pares de clave y valor
//declaracion

let myMap = new Map()//Esta es la forma correcta de declarar un Map vacio

console.log(myMap)

//inicializacion, entre corchetes se separa por comas los pares de elementos relacionados
myMap = new Map([["name", "Angel"],["email", "gg@gg.com"],["age", 46]
])
    console.log(myMap)

    //Meodos y propiedades
    //1.-set, añade un par clave valor al final
    console.log("set:")
    myMap.set("phone", 934574666)
    console.log(myMap)
    
    //2.-get, recibira la clave (unico)
    console.log("get:")
    console.log(myMap.get("age"))
    console.log(myMap.get("xx"))//no existe la clave xx (undefined)

    //3.-has,  comprobar si una clave existe o no
    console.log("has:")
    console.log(myMap.has("name"))//true
    console.log(myMap.has("xx"))//false

    //4-delete, elimina la clave
    console.log("delete:")
    myMap.delete("age")//elimana la clave/valor age (46)
    console.log(myMap)

    //keys and values. 
    //key, retorna un listado con unicamente las claves
    //values, retorna un listado con unicamente los valores
    console.log("propiedad, keys and values:")
    console.log(myMap.keys())
    console.log(myMap.values())

    //size, mediante un numero cual es el tamano del map
    console.log("size:")
    console.log(myMap.size)

    //entries, todas las claves y valores, osea el par:
    console.log("entries:")
    console.log(myMap.entries())
    
    //5.-clear, elimina todo el map
    console.log("clear:")
    myMap.clear()
    console.log(myMap)
    

   
    
    
    

