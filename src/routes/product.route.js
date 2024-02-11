import { Router } from "express";
import { productController } from '../controllers';
const  router = Router();
const { get, store, show, update, remove } = productController;

router.route("/").get(get).post(store);
router.route("/:id").get(show).put(update).delete(remove);

export default router