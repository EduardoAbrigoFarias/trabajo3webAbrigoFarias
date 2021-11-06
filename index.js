 const PORT = 8080
 const express =  require("express");
 const app = express();

/*
 app.get('/', function(req, res) {
   res.send('Hola Mundo!');
 });
 *//*
 app.listen(8080, function() {
   console.log('Aplicación ejemplo, escuchando el puerto 8080!');
 });*/


 arrPro= [ 'Producto1',
    'Producto2',
    'Producto3',
    'Producto4',
    'Producto5',
    'Producto6',
    'Producto7',
    'Producto8',
    'Producto9',
    'Producto10',
    ]

 const server = app.listen(PORT, () =>{
    console.log( `Servidor activo : ${PORT}`)
 })
  
 app.get('/', (req, res) => {
  res.send('Hello World!')
})

  app.get('/productosRam',(rep,res)=>{
    // Genero Número aleatorio
   iDIGI = Math.floor(Math.random() * 10)

    res.send(  `Producto : ${arrPro[iDIGI]}`  ) //
  })

  app.get('/productos',(rep,res)=>{
     //console.log(  `Producto : ${PORT}`  ); //arrPro[5]
     res.send(  `Producto : ${arrPro}`  )
   }
  )
 
 