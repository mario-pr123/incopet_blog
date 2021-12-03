import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCategories, getCatPost } from '../../services';
import { Posts, Categories, Loader, Subpage, Layout } from '../../components';

const CategoryPost = ({ posts }) => {
    const router = useRouter();
    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <Layout>
            <div>
                <Subpage title="NOVEDADES" image="/img/cat.jpg" />
                <div className="homeContainer mx-auto lg:px-40 mb-8 py-10 md:px-20 px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 col-span-1">
                            {posts.map((posts, index) => (
                                <Posts key={index} post={posts.node} />
                            ))}
                        </div>
                        <div className="col-span-1 lg:col-span-4">
                            <div className="relative lg:sticky lg:top-36">
                                <Categories />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default CategoryPost;

export async function getStaticProps({ params }) {
    const posts = await getCatPost(params.slug);

    return {
        props: { posts },
    };
}
export async function getStaticPaths() {
    const categorias = await getCategories();
    return {
        paths: categorias.map(({ slug }) => ({ params: { slug } })),
        fallback: true,
    };
}