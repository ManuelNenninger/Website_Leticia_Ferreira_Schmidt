import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SectionWrapper from "../../atoms/wrapperElements/sectionWrapper"
import {PortableText} from '@portabletext/react'
import {urlFor, ptComponents} from "..//../atoms/sanityComponents/sanityComponents";

export default function BoxSx({aboutContent}) {
  return (
    <SectionWrapper bottomDistance>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ maxWidth: {xs: "none", md: "40vw"} }}
      >
        <Grid item sx={{mb: 0 }}>
          <Typography variant="h2" gutterBottom>
            {aboutContent.aboutTitle}
          </Typography>
        </Grid>
        <Grid item>
          {/*<Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>*/}
          <PortableText
            value={aboutContent.body}
            components={ptComponents}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
