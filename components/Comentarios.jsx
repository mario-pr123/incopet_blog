import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { getComments } from "../services";

const Comentarios = ({ slug }) => {
  const [comentario, setComentario] = useState([]);
  useEffect(() => {
    getComments(slug).then((result) => setComentario(result));
  }, []);
  return (
    <>
        {comentario.length>0 &&(
            <div className="post shadow-lg rounded-lg p-8 pb-12 mb-8">
                <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                    {comentario.length}
                    {' '}
                    Comentarios
                </h3>
                {comentario.map((comentario)=>(
                    <div key={comentario.createdAt} className="border-b border-gray-200 mb-4 pb-4">
                        <p className="mb-4">
                            <span className="font-semibold">{comentario.nombreCom}</span>
                            {' '}
                            el
                            {' '}
                            {moment(comentario.createdAt).format('DD, MMM, YYYY')}
                        </p>
                        <p className="whitespace-pre-line text-gray-700 w-full">{parse(comentario.comentario)}</p>
                    </div>
                ))}
            </div>
        )}
    </>
  );
};

export default Comentarios;
