/* eslint-disable react/no-children-prop */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Head from 'next/head'
import remarkGfm from 'remark-gfm'
import remarkEmoji from 'remark-emoji'

export default function PostPage({ 
    frontmatter: {title,date,cover_image}, slug, content 
}) {
    return (
        <div className="mx-auto py-2 prose prose-lg w-full">
            <Head>
                <title>{slug}</title>
            </Head>
            <div className="flex-col text-right">
                <p className=" text-zinc-600 ">公開日：{date}</p>
            </div>
            <div className="flex-col mb-3">
                <h2 className="text-center">{title}</h2>
            </div>


            <div className="divider"></div>
            <div className="markdown">
                <ReactMarkdown className="markdown" children={content} remarkPlugins={[remarkGfm,remarkEmoji]} />
            </div>
            <div className="divider"></div>

            <div className="text-right">
                    <Link href={"/"}>
                        <a className="hover:text-indigo-600">BACK</a>
                    </Link>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join(process.cwd(), 'posts'));
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    const contentwithmeta = fs.readFileSync(path.join(process.cwd(), 'posts', `${slug}.md`),'utf-8');
    
    const {data:frontmatter, content} = matter(contentwithmeta);
    // console.log(content);
    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}
