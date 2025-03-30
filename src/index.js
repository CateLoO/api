const express = require( 'express')
const v1Router = require("./v1/routes/workoutRoutes.js")
const app = express();
const PORT = process.env.PORT || 1234;


app.use(express.json()) // Middleware to parse JSON bodies
app.use('/api/v1', v1Router);


app.listen(PORT,()=>{
   console.log(`🚀 Server listening on http://localhost:${PORT}`);
 })


