import { request, gql } from 'graphql-request'
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
        postsConnection{
          edges {
            node {
              autor {
                bio
                nombre
                id
                foto {
                  url
                }
              }
              createdAt
              slug
              titulo
              resumen
              imagen {
                url
              }
              categorias{
                nombreCat
                slug
              }
            }
          }
        }
      }
    `
  const result = await request(graphqlAPI, query)
  return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query getPostDetails($slug: String!) {
        post(where: {slug: $slug}){
            autor {
                bio
                nombre
                id
                foto {
                  url
                }
              }
            createdAt
            slug
            titulo
            resumen
            imagen {
                url
            }
            categorias{
                nombreCat
                slug
            }
            contenido{
                raw
            }
        }
    }
    `
  const result = await request(graphqlAPI, query, { slug })
  return result.post;
};

export const getRecentPost = async () => {
  const query = gql`
        query getPostDetails(){
            posts(
                orderBy: createdAt_ASC
                last: 3
                ){
                    titulo
                    tituloResumido
                    imagen {
                        url
                    }
                    createdAt
                    slug
                }
        }
    `
  const result = await request(graphqlAPI, query)
  return result.posts;
};

export const getSimilarPost = async (categorias, slug) => {
  const query = gql`
        query getPostDetails($slug: String!, $categorias: [String!]){
            posts(
                where: {slug_not: $slug, AND: {categorias_some:{slug_in: $categorias}}}
                last: 3
                ){
                    titulo
                    tituloResumido
                    imagen {
                        url
                    }
                    createdAt
                    slug
                }
        }
    `
  const result = await request(graphqlAPI, query, { categorias, slug })
  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query getCat{
        categorias {
            nombreCat
            slug
        }
    }`

  const result = await request(graphqlAPI, query);
  return result.categorias;
}

export const getCatPost = async (slug) => {
  const query = gql`
    query getCatPost($slug: String!) {
      postsConnection(where: {categorias_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            autor {
              bio
              nombre
              id
              foto {
                url
              }
            }
            createdAt
            slug
            titulo
            resumen
            imagen {
              url
            }
            categorias {
              nombreCat
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};


export const submitComment = async (obj) => {
  const result = await fetch('/api/comentarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
  return result.json();
}

export const getComments = async (slug) => {
  const query = gql`
    query getComments($slug: String!){
        comentarios(where: {post: {slug: $slug}}) {
            nombreCom
            createdAt
            comentario
        }
    }`

  const result = await request(graphqlAPI, query, { slug });
  return result.comentarios;
}

export const getFeaturedPosts = async () => {
  const query = gql`
      query getFeaturedPosts() {
        posts(where: {postDestacado: true}) {
          autor {
            nombre
            foto {
              url
            }
          }
          imagen {
            url
          }
          tituloResumido
          slug
          createdAt
        }
      }   
    `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};
