import { GraphQLClient, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphCMSToken = process.env.GRAPHCMS_TOKEN

export default async function comentarios(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphCMSToken}`
    }
  })

  const query = gql`
    mutation CreateComentario($nombreCom: String!, $comentario: String!, $slug: String!){
      createComentario(data:{nombreCom: $nombreCom, comentario: $comentario, post:{connect:{ slug: $slug}}}){id}
    }
  `
  try {
    const result = await graphQLClient.request(query, req.body)
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }

}
