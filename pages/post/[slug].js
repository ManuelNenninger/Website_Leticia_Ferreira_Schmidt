//https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js
import groq from 'groq'
import client from '../../client'
import BlogPage from "../../src/components/templates/blog/blogPage"
import SeoHead from "../../src/components/seoComponents/seoHead";
import { useRouter } from 'next/router'
import Layout from "../../src/layout";


const Post = (props) => {

// let { title="" } = props.post;
//Der SeoHead wird im Build vor getStaticProps pre-rendered
//Deshalb wird title als undef. weitergegeben und der Build bricht mit error ab
  const router = useRouter()
  return(
    <>
      {typeof props?.post?.title !== 'undefined' && (<SeoHead
          canonicalUrl={router.pathname}
          title={props?.post?.title}
        />)}
        <Layout footerContent={props.footerContent}>
          <BlogPage {...props}/>
        </Layout>
    </>
  )
}


const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  mainImage,
  body,
  publishedAt
}`

export async function getStaticPaths() {

  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  //In paths sind nun alle slugs enthalten die Du auf Sainty in der Cloud hast.
  //Diese Slugs werden an params weitergegeben, sodass getStaticProps diesen via context.params zur verfuegung steht.
  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  const footerContent = await client.fetch(groq`
    *[_type == "footer"][0]{brandName, locationName, telephoneNumber, socialFacebook, socialInstagram, socialTwitter}
  `)
  
  return {
    props: {
      post,
      footerContent
    }
  }
}

export default Post
