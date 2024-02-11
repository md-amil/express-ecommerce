import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: 'category', required: true }
});

const productCategoryModel = mongoose.model("ProductCategory", schema);
export default productCategoryModel
