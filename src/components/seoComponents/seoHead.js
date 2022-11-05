import Head from "next/head"
import siteMetadata from "./siteMetadata"


export default function SeoHead({  title,
    description,
    canonicalUrl,
    ogTwitterImage,
    ogImageUrl,
    ogType,
    children,
    siteName,
    keyWords,
  }){

//https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls?hl=de&visit_id=638009830701032306-2086084526&rd=1
//canonicalUrl wird angegeben als https://... und die Index Seite.

  return(
    <>
    <Head>
         //basic metadata
         <title>{title ? (title) : (siteMetadata.title)}</title>
         <meta
             name="viewport"
             content="width=device-width, initial-scale=1"
         />
         //Google meta
         <meta name="robots" content="all" />
         <meta name="google" content="notranslate" />
         //Basic metadata
         <meta name="title" content={title ? (title) : (siteMetadata.title)} key="title" />
         <meta name="description" content={description ? description : siteMetadata.description } key="desc"/>
         <meta name="site_name" content={siteName? siteName : siteMetadata.siteName} key="name"/>
         <meta name="type" content={ogType? ogType : "website"} key="type"/>
         <meta name="keywords" content={keyWords? keyWords : siteMetadata.defaultKeyWords }/>
         //twitter metadata
         <meta name="twitter:card" content="summary" />
         <meta name="twitter:site" content={siteMetadata.twitterHandle} />
         <meta name="twitter:title" content={title ? (title) : (siteMetadata.title)} />
         <meta name="twitter:description" content={description ? description : siteMetadata.describtion} />
         <meta name="twitter:image" content={ogTwitterImage ? ogTwitterImage : siteMetadata.siteLogo} />
         //canonical link
         <link rel="canonical" href={ siteMetadata.siteUrl+ canonicalUrl} />
         //open graph metadata
         <meta property="og:locale" content="en_US" />
         <meta property="og:site_name" content={siteMetadata.companyName} />
         <meta property="og:type" content={ogType? ogType : "website"} />
         <meta property="og:title" content={title ? (title) : (siteMetadata.title)} />
         <meta property="og:description" content={description ? description : siteMetadata.describtion } />
         <meta property="og:image" content={ogImageUrl ? ogImageUrl : siteMetadata.siteLogo} />
         <meta property="og:url" content={canonicalUrl} />
     </Head>
    </>
  )
}
