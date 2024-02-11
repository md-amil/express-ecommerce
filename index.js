var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.js
import express from "express";
import bodyParser from "body-parser";

// src/routes/index.js
import { Router as Router3 } from "express";

// src/routes/product.route.js
import { Router } from "express";

// src/controllers/product.controller.js
var product_controller_exports = {};
__export(product_controller_exports, {
  get: () => get,
  remove: () => remove,
  show: () => show,
  store: () => store,
  update: () => update
});

// src/models/index.js
import mongoose, { Schema } from "mongoose";
var productSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: ""
  },
  price: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  toJSON: { virtuals: true, versionKey: false }
});
productSchema.virtual("categories", {
  ref: "ProductCategory",
  localField: "_id",
  foreignField: "productId",
  justOne: false
});
var productModel = mongoose.model("Product", productSchema);
var models_default = productModel;

// src/models/category.model.js
import mongoose2, { Schema as Schema2 } from "mongoose";
var categorySchema = new Schema2({
  name: {
    type: String,
    required: true,
    default: ""
  }
}, {
  toJSON: { virtuals: true }
});
categorySchema.virtual("products", {
  ref: "ProductCategory",
  localField: "_id",
  foreignField: "categoryId"
});
var categoryModel = mongoose2.model("category", categorySchema);
var category_model_default = categoryModel;

// src/models/productCategory.model.js
import mongoose3, { Schema as Schema3 } from "mongoose";
var schema = new Schema3({
  productId: { type: Schema3.Types.ObjectId, ref: "Product", required: true },
  categoryId: { type: Schema3.Types.ObjectId, ref: "category", required: true }
});
var productCategoryModel = mongoose3.model("ProductCategory", schema);
var productCategory_model_default = productCategoryModel;

// src/controllers/product.controller.js
async function get(req, res) {
  const products = await models_default.find().populate({
    path: "categories",
    populate: { path: "categoryId" }
  });
  return res.json(products);
}
async function show(req, res) {
  const { id } = req.params;
  const products = await models_default.findById(id);
  return res.json(products);
}
async function store(req, res) {
  const { name, price, categoryId } = req.body;
  const product = new models_default({
    name,
    price
  });
  const procat = new productCategory_model_default({
    productId: product._id,
    categoryId
  });
  await product.save();
  await procat.save();
  return res.json(product);
}
async function update(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  const { price } = req.body;
  const product = await models_default.findByIdAndUpdate(id, { name }, { price }, { new: true });
  return res.json(product);
}
async function remove(req, res) {
  const { id } = req.params;
  const product = await models_default.findByIdAndDelete(id);
  return res.send("SuccessFully Removed!!");
}

// src/controllers/category.controller.js
var category_controller_exports = {};
__export(category_controller_exports, {
  get: () => get2,
  remove: () => remove2,
  show: () => show2,
  store: () => store2,
  update: () => update2
});
async function get2(req, res) {
  const categories = await category_model_default.find().populate({
    path: "products",
    populate: { path: "productId" }
  });
  return res.json(categories);
}
async function show2(req, res) {
  const { id } = req.params;
  const categories = await category_model_default.findById(id);
  return res.json(categories);
}
async function store2(req, res) {
  const { name } = req.body;
  const category = new category_model_default({
    name
  });
  await category.save();
  return res.json(category);
}
async function update2(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  const category = await category_model_default.findByIdAndUpdate(id, { name }, { new: true });
  return res.json(category);
}
async function remove2(req, res) {
  const { id } = req.params;
  const category = await category_model_default.findByIdAndDelete(id);
  return res.send("SuccessFully Removed!!");
}

// src/routes/product.route.js
var router = Router();
var { get: get3, store: store3, show: show3, update: update3, remove: remove3 } = product_controller_exports;
router.route("/").get(get3).post(store3);
router.route("/:id").get(show3).put(update3).delete(remove3);
var product_route_default = router;

// src/routes/category.route.js
import { Router as Router2 } from "express";
var router2 = Router2();
var { get: get4, store: store4, show: show4, update: update4, remove: remove4 } = category_controller_exports;
router2.route("/").get(get4).post(store4);
router2.route("/:id").get(show4).put(update4).delete(remove4);
var category_route_default = router2;

// src/routes/index.js
var routes = Router3();
routes.use("/products", product_route_default);
routes.use("/categories", category_route_default);
var routes_default = routes;

// src/utils/index.js
import mongoose4 from "mongoose";
mongoose4.Promise = global.Promise;
var mongoURI = "mongodb://localhost:27017/ecommerce";
mongoose4.connect(mongoURI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
}).then(() => console.log("Successfully connect to MongoDB.", mongoURI)).catch((err) => {
  console.error("Connection error", err);
  process.exit();
});
var connection = mongoose4.connection;
var utils_default = connection;

// src/index.js
var app = express();
var port = 3e3;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes_default);
utils_default.on("connect", () => console.log("database connected successfully"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map
