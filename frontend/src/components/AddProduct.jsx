import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
  const [Descripcion, setDescripcion] = useState("");
  const [Precio, setPrecio] = useState("");
  const navigate = useNavigate();

  const saveProducto = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/producto", {
      Descripcion: Descripcion,
      Precio: parseInt(Precio),
    });
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <form onSubmit={saveProducto} className="my-10">
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Descripcion del Producto</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Descripcion del Producto"
              value={Descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Precio</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Precio"
              value={Precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;