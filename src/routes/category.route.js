import { Router } from "express";
import { categoryController } from '../controllers';
const  router = Router();
const { get, store, show, update, remove } = categoryController;

router.route("/").get(get).post(store);
router.route("/:id").get(show).put(update).delete(remove);

export default router