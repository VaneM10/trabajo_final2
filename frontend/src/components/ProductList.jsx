import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

const ProductList = () => {
  const { mutate } = useSWRConfig();
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/producto");
    return response.data;
  };

  const { data } = useSWR("producto", fetcher);
  if (!data) return <h2>Loading...</h2>;

  const deleteProducto = async (productoId) => {
    await axios.delete(`http://localhost:5000/producto/${productoId}`);
    mutate("producto");
  };

  return (
    <div className='flex flex-col mt-5'>
      <div className="w-full">
        <Link
          to="/add"
          className="bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg">Agregar Nuevo</Link>
        <div className="relative shadow rounded-lg mt-3">
          <table className="_'w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6">Descripcion del Producto</th>
                <th className="py-3 px-6">Precio</th>
                <th className="py-3 px-1 text-center">Accion</th>
              </tr>
            </thead>
            <tbody>
              {data.map((producto, index) => (
                <tr className="bg-white border-b" key={producto.id}>
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">
                    {producto.Descripcion}
                  </td>
                  <td className="py-3 px-6">{producto.Precio}</td>
                  <td className="py-3 px-1 text-center">
                    <Link
                      to={`/edit/${producto.id}`}
                      className="font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1">Editar</Link>
                    <button
                      onClick={() => deleteProducto(producto.id)}
                      className="font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;