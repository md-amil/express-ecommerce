import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name:{
    type: String,
    required: true,
    default: "",
  },
  price: {
    type: Number,
    required:true,
    default:0
  },
  categories:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]

});


const productModel = mongoose.model("Product", productSchema);
export default productModel

