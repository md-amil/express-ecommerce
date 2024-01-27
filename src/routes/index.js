import { Router } from "express";
import { get, remove, show, store, update } from "../controllers/product.controller.js";
const routes = Router();

routes.get('/',(req,res)=>res.send("working"))
routes.get('/products',get)
routes.get('/products/:id',show)
routes.post('/products',store)
routes.put('/products',update)
routes.delete('/products',remove)
export default routes;