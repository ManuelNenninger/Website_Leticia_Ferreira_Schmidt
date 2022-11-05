import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import SectionWrapper from "../../atoms/wrapperElements/sectionWrapper"
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../../client'
import { urlFor } from "../../atoms/sanityComponents/sanityComponents";
import ActionButton from "../../atoms/buttons/actionButton"


export default function BoxSx(props) {
  const [more, setMore] = React.useState(4);
  const array = [0, 1, 2, 3, 4, 5];
  const fullLength = props?.posts?.length;

  const handleState = () => {
    setMore(fullLength);
  };

  const PortfolioCard = ({title, mainImage, slug}) => {
    return (
      <>
        <Card sx={{ maxWidth: "100%", position: "relative" }}>
          <CardActionArea href={"/post/" + slug.current}  >
            <CardMedia
              sx={{ position: "relative" }}
              component="img"
              height="500"
              image={urlFor(mainImage).url()}
              alt={title}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                //backgroundImage: `url(https://cdn.netzpolitik.org/wp-upload/2022/08/stable-diffusion-cat-man-rain-860x484.jpg)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "rgba( 255, 255, 255, 0.4 )",
                  //opacity: [0.9, 0.8, 0.7],
                  backdropFilter: "blur( 2.5px )",
                }
              }}
            >
              <Typography sx={{ position: "relative" }} variant="h2" sx={{fontWeight: "400"}}>
                {title}
              </Typography>
            </Box>
          </CardActionArea>
        </Card>
      </>
    );
  };

  return (
    <SectionWrapper topDistance bottomDistance>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="space-around"
        spacing={0}
      >
        <Grid item sx={{pb: 5 }}>
          <Typography variant="h2" gutterBottom sx={{fontWeight: "300", }}>
            {props?.portfolioTitel}
          </Typography>
        </Grid>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {props.posts.slice(0, more).map(({ _id, title = '', slug = '', publishedAt = '', mainImage='', index }) => (
              <Grid item xs={12} sm={12} md={6} key={index}>
                <PortfolioCard title={title} mainImage={mainImage} slug={slug}/>
              </Grid>
            ))}
          </Grid>
        </Box>
        {props?.posts?.length > 0 &&
          (more < fullLength && (
            <Grid item sx={{width: "100%", display: "flex", justifyContent: "center", mt: 5}}>
              <ActionButton variant="outlined" text="Mehr" secondaryColor onClick={handleState} sx={{px: 5}}/>
            </Grid>
          ))
        }
      </Grid>
    </SectionWrapper>
  );
}
