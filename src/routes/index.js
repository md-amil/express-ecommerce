import { Router } from "express";
const routes = Router();
import productRouter from "./product.route";
import categoryRouter from "./category.route";

// routes.get('/',(req,res)=>res.send("working"))
// routes.get('/products',get)
// routes.get('/products/:id',show)
// routes.post('/products',store)
// routes.put('/products/:id',update)
// routes.delete('/products/:id', remove)

routes.use("/products", productRouter);
routes.use("/categories", categoryRouter);

export default routes;