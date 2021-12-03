import React from 'react'
import { getPosts, getPostDetails } from '../../services'
import { PostDetail, PostWidget, Autor, Comentarios, ComentariosForm, Layout, Subpage, PostHeader } from '../../components'
import { useRouter } from 'next/router'
import { Loader } from '../../components'

const PostDetails = ({ post }) => {
    const router =useRouter();
    if(router.isFallback){
        return <Loader/>
    }
    const titulo="INCOPET S.A. | " + post.titulo;
    const desc = post.resumen
    return (
        <Layout title={titulo} description={desc}>
            <PostHeader post={post}/>
                <div className="flex flex-col lg:px-60 md:px-20 px-4">
                        <PostDetail post={post} />
                        <Autor autor={post.autor} />
                        <PostWidget slug={post.slug} categorias={post.categorias.map((categoria) => categoria.slug)} />
                        <ComentariosForm slug={post.slug} />
                        <Comentarios slug={post.slug} />
                </div>
        </Layout>
    )
}

export default PostDetails

export async function getStaticProps({ params }) {
    const data = (await getPostDetails(params.slug)) || [];
    return {
        props: { post: data }
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    }
}
