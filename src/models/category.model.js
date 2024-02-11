import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name:{
    type: String,
    required: true,
    default: "",
    },
  products:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

// categorySchema.virtual('products', {
//   ref: 'ProductCategory',
//   localField: '_id',
//   foreignField: 'categoryId'
// });

const categoryModel = mongoose.model("Category", categorySchema);
export default categoryModel
