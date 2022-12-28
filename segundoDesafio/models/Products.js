const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema(
    {
        title:{type: String , required:true },
        desc:{type: String , required:true },
        img:{type:String , required:true },
        stock:{type: Number, required:true },
        price:{type:Number , required:true }
    },
    {timestamps: true }
);

module.exports = mongoose.model("Products", productsSchema);