const express = require('express')

const app = express()


app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
const Items = ['Video Games', 'Strawberries',
 'Coffee', "Clothes","Art Supplies","Paint",
 "MakeUp","Blankets","Mugs","Tech Stuff"];

 app.get('/',(req,res)=>{
    res.send("<h1> Mari's Favorite Things</h1>")
})

 app.get('/:indexOfItemsArray',(req,res)=>{
    res.send(Items[req.params.indexOfItemsArray])
})



app.listen('3000', (req, res)=>{
    console.log("Server is now listening on port 3000")
  })