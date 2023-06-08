import express from "express";
import {
    getProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto,

} from "../controllers/ProductoController.js";

const router = express.Router();

router.get('/producto',getProductos);
router.get('/producto/:id',getProductoById);
router.post('/producto',createProducto);
router.patch('/producto/:id',updateProducto);
router.delete('/producto/:id',deleteProducto);

export default router;