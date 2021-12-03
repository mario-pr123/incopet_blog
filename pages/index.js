
import { Layout, Posts, PostWidget, Subpage } from '../components'
import FeaturedPosts from '../components/sections/FeaturedPosts'
import { getPosts } from '../services'

export default function Home({ posts }) {
  return (
    <Layout>
      <Subpage title="BLOG INCOPET" image="/img/blogIn.jpg" />
      <div className="homeContainer mx-auto lg:px-40 mb-8 py-10 md:px-20 px-5">
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post) =>
              <Posts post={post.node} key={post.titulo}/>)}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative lg:top-36">
              <PostWidget />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  }
}