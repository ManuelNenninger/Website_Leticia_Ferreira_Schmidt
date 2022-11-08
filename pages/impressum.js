import groq from 'groq'
import client from '../client'
import Typography from '@mui/material/Typography';
import Impressum from "../src/components/templates/rechtliches/impressum";
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
            canonicalUrl={"/impressum"}
            title={"Impressum Leticia Ferreira Schmidt"}
            description="Impressum"
          />
        <Layout footerContent={props.footerContent} primaryCallToAction={props.heroContent.primaryCallToAction}>
          <Impressum {...props} />
        </Layout >
      </>
    )
}

export async function getStaticProps() {
  //Denk dran, dass Du bei diesem query das Datum hinzufügen musst.

    const impressum = await client.fetch(groq`
      *[_type == "impressum"][0]{body}
    `)
    const footerContent = await client.fetch(groq`
      *[_type == "footer"][0]{brandName, locationName, telephoneNumber, socialFacebook, socialInstagram, socialTwitter}
    `)
    const heroContent = await client.fetch(groq`
      *[_type == "heroSection"][0]{heroTitle, heroDescribtion, mainImage, "primaryCallToAction": primaryCallToAction->{url,linkText}, "secondaryCallToAction": secondaryCallToAction->{url,linkText},  }
    `)
    return {
      props: {
        impressum,
        footerContent,
        heroContent,
      },
      revalidate: process.env.SANITY_REVALIDATE_SECRET ? parseInt(process.env.SANITY_REVALIDATE_SECRET) : parseInt(86400),
    }
}

export default Index
