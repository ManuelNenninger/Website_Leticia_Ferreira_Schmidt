import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SectionWrapper from "../../atoms/wrapperElements/sectionWrapper"
import {PortableText} from '@portabletext/react'
import {urlFor, ptComponents} from "../../atoms/sanityComponents/sanityComponents";

export default function BoxSx(props) {
  const {
      title = 'Missing title',
      name = 'Missing name',
      mainImage='',
      categories,
      authorImage,
      publishedAt="",
      body = []
    } = props.post

    let utcDate = new Date(publishedAt).toLocaleString('de-DE',{day: "numeric", month:'long', timeZone:'UTC', year: 'numeric'});

  const ResponsiveTypography = (props) => {
    return (
      <Typography
        variant={props.variant}
        gutterBottom
        component="h1"
        sx={{ fontWeight: "300" }}
      >
        {title}
      </Typography>
    );
  };
  return (
    <SectionWrapper  bottomDistance>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ px: {xs: 0, md: 10}, pt: 5 }}
        >
          <Grid
            xs={12}
            item
            sx={{ width: "100%", mb: 1 }}
          >
            <Box className="unset-img-blog" sx={{ width: "100%" }}>
              <Image
                alt="Picture of the author"
                width={900}
                height={600}
                src={urlFor(mainImage).url()}
                className="custom-img-blog"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ mb: 6 }}>
            <Typography variant="subtltie1" gutterBottom>
            {utcDate}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ pr: { xs: 0, md: 10 } }}>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ResponsiveTypography variant="h2" />
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <ResponsiveTypography variant="h3" />
            </Box>
            <PortableText
              value={body}
              components={ptComponents}
            />
          </Grid>
        </Grid>
      </SectionWrapper>
  );
}
