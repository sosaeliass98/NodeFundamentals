//Para importar bibliotecas en Node.JS utilizamos 'require'
//con 'const' almacenamos la biblioteca en una constante
const express = require("express")

//con esto, tenemos creada nuestra aplicacion
//la guardamos en una 'const' para teenr una referencia
const app = express()

//Acá uso una funcion intermedia (middleware) para convertir los datos
//En este caso convierto a texto plano
app.use(express.text()) //Utilizando Middleware para parsear datos: texto

app.use(express.json()) //Utilizo el Middleware para conversion de datos JSON


// "/": indica que estamos vistando el Home o Raiz
app.get("/",function(peticion,respuesta){
    respuesta.send("Metodo Get")
})

// "/usuarios" indica que estamos yendo a una ruta de la app
// "Un POST hacia la ruta de usuarios nos indica que queremos agregar un usuario"
app.post("/usuarios",function(peticion,respuesta){
    const username = peticion.body
    respuesta.send("Metodo POST: " +username)
})

app.post("/json",function(peticion,respuesta){
    const user = peticion.body
    respuesta.send("Hola: "+user.nombre)
})

app.put("/",function(peticion,respuesta){
    respuesta.send("Metodo PUT")
})

app.delete("/",function(peticion,respuesta){
    respuesta.send("Metodo DELETE")
})

// Investigar acerca de HTTP

//Tenemos una funcion que se llama listen y el callback es lo que se ejecuta despues
app.listen(4000,()=>{
    console.log("Escuchando: http://localhost:4000")
})