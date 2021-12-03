import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { submitComment } from "../services";

const ComentariosForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const storeDataEl = useRef();
  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("nombreCom");
  });

  const handleComment = () => {
    setError(false);
    const { value: comentario } = commentEl.current;
    const { value: nombreCom } = nameEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comentario || !nombreCom) {
      setError(true);
      return;
    }
    const commentObj = {
      nombreCom,
      comentario,
      slug,
    };
    if (storeData) {
      window.localStorage.setItem("nombreCom", nombreCom);
    } else {
      window.localStorage.removeItem("nombreCom", nombreCom);
    }
    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="post p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Déjanos tu comentario
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-4">
        <input
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          type="text"
          ref={nameEl}
          name="nombreCom"
          placeholder="Nombre Completo"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          name="comentario"
          placeholder="Comentario"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
            className="ml-4 mt-5"
          />
          <label
            className="text-gray-500 cursor-pointer ml-2"
            htmlFor="storeData"
          >
            Guardar mi nombre para próximos comentarios
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">Rellene todos los campos</p>
      )}
      <div className="mt-8 ">
        <button
          type="button"
          onClick={handleComment}
          className="transition duration-300 ease-in hover:bg-blue-600 hover:-translate-y-2 inline-block bg-blue-500 text-lg text-white rounded-full px-8 py-3 cursor-pointer"
        >
          Comentar
        </button>
      </div>
      {showSuccessMessage && (
        <span className="text-lg float-right font-semibold mt-3 text-blue-500 ">
          Comentario publicado para revisión
        </span>
      )}
    </div>
  );
};

export default ComentariosForm;
