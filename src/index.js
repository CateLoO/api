 const express = require( 'express')
 const app = express();

 const PORT = process.env.PORT || 1234;

 app.listen(PORT,()=>{
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
 })


 //Rutas

 app.get('/',(req,res )=>{
    res.send(`hello world`)
 })