const mongoose =require("mongoose") 

const ProductShema= mongoose.Schema ({ 

    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    }
}, 

{
    timestamps: true




})

module.exports = mongoose.model("Product", ProduitSchema);
