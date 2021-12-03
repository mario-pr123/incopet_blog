import React from "react";
import moment from "moment";
import Link from "next/link";

const Posts = ({ post }) => {
  return (
    <div className="post shadow rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="transition duration-500 ease-in-out relative lg:hover:scale-105 overflow-hidden shadow-normal pb-80 mb-6 ">
        <img
          src={post.imagen.url}
          alt={post.titulo}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition ease-in-out duration-500 text-center mb-8 cursor-pointer hover:text-blue-500 text-3xl font-bold">
        <Link href={`/post/${post.slug}`}>{post.titulo}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-4 w-full">
        <p className="inline align-middle text-gray-700 ml-2 text-lg font-medium">Categoría:</p> 
        {post.categorias.map((posts, index) => (
          <p
            key={index}
            className="inline align-middle text-gray-700 ml-2 text-lg font-medium"
          >
            {posts.nombreCat}
          </p>
        ))}
      </div>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            alt={post.autor.nombre}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.autor.foto.url}
          />
          <p className="inline align-middle text-gray-700 ml-2 text-lg font-medium">
            {post.autor.nombre}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.createdAt).format("MMM, DD, YYYY")}</span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-10 mb-8">
        {post.resumen}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition ease-out duration-500 transform hover:-translate-y-1 inline-block bg-blue-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Seguir leyendo
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Posts;
