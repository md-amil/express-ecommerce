import productModel from "../models"
import categoryModel from "../models/category.model"
import productCategoryModel from "../models/productCategory.model"

export async function get(req, res) {
   const products = await productModel.find().populate({
    path: 'categories',
    populate: { path: 'categoryId' }
  })
   return res.json(products)
}

export async function show(req, res) {
   const {id} = req.params
   const products = await productModel.findById(id)
   return res.json(products)
}

export async function store(req, res) {
   const { name, price, categoryId } = req.body
   const product = new productModel({
      name,
      price,
   })
   const procat = new productCategoryModel({
      productId : product._id,
      categoryId : categoryId,
   })
   await product.save()
   await procat.save()
   return res.json(product)
}

export async function update(req, res) {
   const { id } = req.params
   const { name } = req.body
   const { price } = req.body
   const product = await productModel.findByIdAndUpdate(id ,{name},{price},{new:true})
   return  res.json(product);
}

export async function remove(req, res) {
   const { id } = req.params
   const product = await productModel.findByIdAndDelete(id)
   return  res.send("SuccessFully Removed!!");
}
