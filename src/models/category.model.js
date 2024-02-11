import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name:{
    type: String,
    required: true,
    default: "",
    },
}, {
  toJSON: { virtuals: true }
});

categorySchema.virtual('products', {
  ref: 'ProductCategory',
  localField: '_id',
  foreignField: 'categoryId'
});

const categoryModel = mongoose.model("category", categorySchema);
export default categoryModel
