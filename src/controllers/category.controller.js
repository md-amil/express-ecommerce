import categoryModel from "../models/category.model"

export async function get(req, res) {
   const categories = await categoryModel.find().populate({
    path: 'products',
    populate: { path: 'productId' }
  })
   return res.json(categories)
}

export async function show(req, res) {
   const {id} = req.params
   const categories = await categoryModel.findById(id)
   return res.json(categories)
}

export async function store(req, res) {
   const {name} = req.body
   const category = new categoryModel({
      name,
   })
   await category.save()
   return res.json(category)
}

export async function update(req, res) {
   const { id } = req.params
   const { name } = req.body
   const category = await categoryModel.findByIdAndUpdate(id ,{name},{new:true})
   return  res.json(category);
}

export async function remove(req, res) {
   const { id } = req.params
   const category = await categoryModel.findByIdAndDelete(id)
   return  res.send("SuccessFully Removed!!");
}
