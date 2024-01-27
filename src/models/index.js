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
  categoryId:{
    type:Schema.Types.ObjectId
  }
});

// videoSchema.methods.findBucket = function (cb: any) {
//     return cred.findById(this.bucket_id);
// };
const productModel = mongoose.model("Product", productSchema);
export default productModel
