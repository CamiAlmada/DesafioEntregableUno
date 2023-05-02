import express from "express";

import ProductManager from "./desafioDos.js"

const app = express()

const ProductManager = new ProductManager()

app.use(express.urlencoded({extended: true}));

app.get("/products", async (req, res)=>{
    console.log(req);
    res.send("Hola")
})


app.get("/products", async(req,res)=>{

    try{

        let allProd= await ProductManager.getProduct()
        res.send (allProd)

    }

    catch(err){
        res.send("Error")
    }
    
})


// app.get("/products", (req,res)=>{

//     let lim = req.query.producto

app.get("products/:pid", async(req,res)=>{
    let pid= producto.find((prod)=>{
        return prod.id===req.params.id
    })

    res.send(pid)
})



app.listen(8080, ()=>{
    console.log("Estoy escuchando el 8080");
})

