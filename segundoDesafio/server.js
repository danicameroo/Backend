const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productsRoute = require("./routes/products")
const cartRoute = require("./routes/cart")

const URL = "mongodb+srv://danielaCamero:daniela2002@cluster0.aft9wce.mongodb.net/test"

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use("/api/products", productsRoute);
app.use("/api/carts", cartRoute);

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

