import productModel from "../models"

export async function get(req, res) {
   const products = await productModel.find()
   return res.json(products)
}
export async function show(req, res) {
   const {id} = req.params
   const products = await productModel.get()
   return res.json(products)
}
export async function store(req, res) {
   const {name,price} = req.body
   const product = new productModel({
      name,
      price
   })
   await product.save()
   return res.json(product)
 }
export async function update(req, res) {
   const {id} = req.params
   const {name} = req.body
   return  res.json(response);
}
export async function remove(req, res) {
   const {id} = req.params
   return  res.send("okey");
}
