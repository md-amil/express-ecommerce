import productModel from "../models/product.model"
import categoryModel from "../models/category.model"

export async function get(req, res) {
   const products = await productModel.find().populate('categories','-products')
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
      categories:[categoryId]
   })
   const category = await categoryModel.findById(categoryId)
   category.products.push(product._id)
   category.save()
   await product.save()
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
