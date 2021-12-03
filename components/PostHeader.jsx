import React from "react";
import moment from "moment";
const PostHeader = ({ post }) => {
  return (
    <div className="postHeaderTop mb-8">
      <div className="postHeaderTopItem">
        <img
          className="postHeaderImg"
          src={post.imagen.url}
          alt={post.titulo}
        />
        <div className="postHeaderTopItemText">
          <h1>{post.titulo}</h1>
          <div className="postHeaderTopItemExtra">
            <img
              alt={post.autor.nombre}
              height="30px"
              width="30px"
              className="postImgProfile"
              src={post.autor.foto.url}
            />
            <p>{post.autor.nombre}</p>
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
      </div>
    </div>
  );
};

export default PostHeader;
