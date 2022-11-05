import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Typography from '@mui/material/Typography';
import HomePage from "../src/components/templates/homePage/mainPage";
// import { useAppContext } from "../src/appContext";
import Layout from "../src/layout";
import SeoHead from "../src/components/seoComponents/seoHead";


const Index = (props) => {
  // let value = useAppContext();
  // value.setFooterContent(() => {
  //   return props.footerContent
  // });
    return (
      <>
        <SeoHead
            canonicalUrl={"/"}
            title={"Titel noch nicht vergeben"}
          />
        <Layout footerContent={props.footerContent} primaryCallToAction={props.heroContent.primaryCallToAction}>
          <HomePage {...props} />
        </Layout >
      </>
    )
}

export async function getStaticProps() {
  //Denk dran, dass Du bei diesem query das Datum hinzufügen musst.
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
    const heroContent = await client.fetch(groq`
      *[_type == "heroSection"][0]{heroTitle, heroDescribtion, mainImage, "primaryCallToAction": primaryCallToAction->{url,linkText}, "secondaryCallToAction": secondaryCallToAction->{url,linkText},  }
    `)
    const portfolioTitel = await client.fetch(groq`
      *[_type == "portfolioSectionContent"][0]{title}
    `)
    const aboutContent = await client.fetch(groq`
      *[_type == "aboutSection"][0]{aboutTitle, body}
    `)
    const footerContent = await client.fetch(groq`
      *[_type == "footer"][0]{brandName, locationName, telephoneNumber, socialFacebook, socialInstagram, socialTwitter}
    `)
    return {
      props: {
        posts,
        heroContent,
        portfolioTitel,
        aboutContent,
        footerContent,
      }
    }
}

export default Index
