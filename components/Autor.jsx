import React from "react";
import Image from 'next/image'

const Autor = ({ autor }) => {
  return (
    <div className="post text-center mt-20 mb-8 p-12 relative rounded-lg">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          className="align-middle rounded-full"
          unoptimized
          src={autor.foto.url}
          alt={autor.nombre}
          width="100px"
          height="100px"
          objectFit="cover"
        />
      </div>
      <h3 className="my-4 text-xl font-semibold">{autor.nombre}</h3>
      <p className="text-lg">{autor.bio}</p>
    </div>
  );
};

export default Autor;
