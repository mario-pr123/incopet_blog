import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPost, getSimilarPost } from "../services";

const PostWidget = ({ categorias, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPost(categorias, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPost().then((result) => setRelatedPosts(result));
    }
  }, [slug]);
  return (
    <div className="postWidget shadow-lg p-8 mb-8">
      <h3 className="text-xl mb-4 font-semibold border-b pb-4">
        {slug ? "Publicaciones Relacionadas" : "Publicaciones Recientes"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.titulo} className="flex items-center w-full mb-4">
          <div className="w-18 flex-none">
            <Link href={`/post/${post.slug}`}>
              <img
                src={post.imagen.url}
                alt={post.tituloResumido}
                width="90px"
                className="align-middle rounded-md trasition duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-600 font-xs">
              {moment(post.createdAt).format("MMM, DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`}>
              <h4 className="text-sm text-justify cursor-pointer transition duration-300 ease-in-out hover:text-blue-600">
              {slug ?
                {post.titulo} : {post.tituloResumido} }
              </h4>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
