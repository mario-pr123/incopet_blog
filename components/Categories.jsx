import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    getCategories().then((newCategorias) => setCategorias(newCategorias));
  }, []);
  return (
    <div className="postWidget shadow-lg p-8 mb-8">
      <h3 className="text-xl mb-4 font-semibold border-b pb-4">Categorías</h3>
      {categorias.map((categoria) => (
        <Link key={categoria.slug} href={`/categoria/${categoria.slug}`}>
          <span className="cursor-pointer transition duration-500 ease-in-out hover:translate-x-3 border-b hover:text-blue-600 block pb-3 mb-3">{categoria.nombreCat}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
