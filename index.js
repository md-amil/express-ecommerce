// src/index.js
import express from "express";
import bodyParser from "body-parser";

// src/routes/index.js
import { Router } from "express";

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
  },
  categoryId: {
    type: Schema.Types.ObjectId
  }
});
var productModel = mongoose.model("Product", productSchema);
var models_default = productModel;

// src/controllers/product.controller.js
async function get(req, res) {
  const products = await models_default.find();
  return res.json(products);
}
async function show(req, res) {
  const { id } = req.params;
  const products = await models_default.get();
  return res.json(products);
}
async function store(req, res) {
  const { name, price } = req.body;
  const product = new models_default({
    name,
    price
  });
  await product.save();
  return res.json(product);
}
async function update(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  return res.json(response);
}
async function remove(req, res) {
  const { id } = req.params;
  return res.send("okey");
}

// src/routes/index.js
var routes = Router();
routes.get("/", (req, res) => res.send("working"));
routes.get("/products", get);
routes.get("/products/:id", show);
routes.post("/products", store);
routes.put("/products", update);
routes.delete("/products", remove);
var routes_default = routes;

// src/utils/index.js
import mongoose2 from "mongoose";
mongoose2.Promise = global.Promise;
var mongoURI = "mongodb://localhost:27018/ecommerce";
mongoose2.connect(mongoURI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
}).then(() => console.log("Successfully connect to MongoDB.", mongoURI)).catch((err) => {
  console.error("Connection error", err);
  process.exit();
});
var connection = mongoose2.connection;
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
