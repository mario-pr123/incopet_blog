import React from "react";
import moment from "moment";
import { RichText } from "@graphcms/rich-text-react-renderer";

const PostDetail = ({ post }) => {
  return (
    <div className="post shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="px-4 lg:px-0">
        <RichText
          content={post.contenido.raw.children}
          renderers={{
            h1: ({ children }) => (
              <h1 className="text-2xl font-bold mb-4">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl font-bold mb-4">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg font-bold mb-4">{children}</h3>
            ),
            h4: ({ children }) => (
              <h4 className="text-base font-semibold mb-4">{children}</h4>
            ),
            h5: ({ children }) => (
              <h5 className="text-base font-medium mb-4">{children}</h5>
            ),
            h6: ({ children }) => (
              <h6 className="text-base font-medium mb-4">{children}</h6>
            ),
            ul: ({ children }) => (
              <ul className="mb-2 list-disc">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="mb-2 list-decimal">{children}</ol>
            ),
            li: ({ children }) => <li className="mb-4 ml-6">{children}</li>,
            img: ({ src, altText }) => (
              <img
                src={src}
                alt={altText}
                objectFit="cover"
                className="lg:w-4/5 w-full md:w-1/2 rounded-xl border shadow-2xl transition duration-300 ease-in cursor-pointer hover:scale-105 mb-8 "
              />
            ),
            video: ({ src, title }) => (
              <video
                src={src}
                title={title}
                controls
                className="lg:w-4/5 w-full md:w-1/2 rounded-xl cursor-pointer mb-8 border shadow-2xl"
              />
            ),
            iframe: ({ url, height }) => (
              <div>
                <iframe
                  src={url}
                  height={height}
                  className="lg:w-4/5 w-full md:w-1/2 rounded-xl cursor-pointer mb-8 border shadow-2xl"
                />
              </div>
            ),
            table: ({ children }) => (
              <table className="table-fixed border-collapse leading-6 w-full mb-8 ">
                {children}
              </table>
            ),
            table_cell: ({ children }) => (
              <td className="border border-black p-8 text-center">
                {children}
              </td>
            ),
            p: ({ children }) => (
              <p className="mb-5 text-justify">{children}</p>
            ),
            italic: ({ children }) => <em>{children}</em>,
            bold: ({ children }) => <strong>{children}</strong>,
          }}
        ></RichText>
      </div>
    </div>
  );
};

export default PostDetail;
