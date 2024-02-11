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

}, {
  toJSON: { virtuals: true ,  versionKey:false,}
});

productSchema.virtual('categories', {
  ref: 'ProductCategory',
  localField: '_id',
  foreignField: 'productId',
  justOne: false,
});

const productModel = mongoose.model("Product", productSchema);
export default productModel

