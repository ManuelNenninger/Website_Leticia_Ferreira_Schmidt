import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SectionWrapper from "../../atoms/wrapperElements/sectionWrapper";
import { ptComponents } from "../../atoms/sanityComponents/sanityComponents";
import { PortableText } from '@portabletext/react'

export default function Imressum(props) {
  return(
    <>
      <SectionWrapper fullViewHeight topDistance>
        <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        >
          <Grid item sx={{pb: 5}}>
            <Typography variant="h2" gutterBottom>
              Impressum{" "}
            </Typography>
          </Grid>
          <Grid item>
            <PortableText
              value={props?.impressum?.body}
              components={ptComponents}
            />
          </Grid>
        </Grid>
      </SectionWrapper>
    </>
  )
}
