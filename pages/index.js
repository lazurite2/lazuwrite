/* eslint-disable react/jsx-key */
import Head from 'next/head'
import Post from '@/components/Post'
import getAllPosts from 'lib/post';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-0">
      <Head>
        <title>dailytalk</title>
      </Head>
        {/* <ul className="place-content-center">
          {posts.map((post, index) => (
            <li key={index} className="w-1/2 mb-3 p-2" style={{ 'listStyle' : 'none' }}> <Post post={post} /> </li>
          ))}
        </ul> */}
      <div className="text-xl py-7">
        POSTS
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 ">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))
        }
      </div>
      {/* <div className="font-bold text-xl py-7">
          TAGS
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 ">

      </div> */}
    </div>
  )
}

export async function getStaticProps () {
  const posts = getAllPosts();

  return {
      props: {
        posts,
      },
  };
}