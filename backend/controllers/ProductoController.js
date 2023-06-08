import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export const getProductos = async (req, res) =>{
    try {
        const response = await prisma.producto.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
export const getProductoById = async (req, res) =>{
    try {
        const response = await prisma.producto.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}


export const createProducto = async (req, res) =>{
    const {Descripcion, Precio} = req.body;
    try {
        const producto = await prisma.producto.create({
            data:{
                Descripcion: Descripcion,
                Precio: Precio
            }
        });
        res.status(201).json(producto);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}
export const updateProducto = async (req, res) =>{
    const {Descripcion, Precio} = req.body;
    try {
        const producto = await prisma.producto.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                Descripcion: Descripcion,
                Precio: Precio
            }
        });
        res.status(200).json(producto);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteProducto = async (req, res) =>{
    try {
        const producto = await prisma.producto.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(producto);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}