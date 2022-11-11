import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ActionButton from "../buttons/actionButton"

export default function HeroDescribtion(props) {
const {heroTitle, heroDescribtion, primaryCallToAction, secondaryCallToAction} = props
  const ResponsiveTypography = (props) => {
    return (
      <Typography
        variant={props.variant}
        gutterBottom
        component="h1"
        sx={{ fontWeight: "300" }}
      >
        {heroTitle}
      </Typography>
    );
  };

  return (
    <>
      <Box sx={{}}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ pr: { xs: "none", md: 5 } }}
        >
          <Grid item sx={{ mb: 3 }}>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ResponsiveTypography variant="h2" />
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <ResponsiveTypography variant="h3" />
            </Box>
          </Grid>
          <Grid item sx={{ mb: 6 }}>
            <Typography variant="h3" gutterBottom sx={{ fontSize: "1.375rem" }}>
              {heroDescribtion}
            </Typography>
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <Box>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={12} >
                  {primaryCallToAction && <ActionButton text={primaryCallToAction?.linkText} href={primaryCallToAction?.url} variant="contained"  secondaryColor sx={{mr: 5, mb: 2}} />}
                  {secondaryCallToAction &&  <ActionButton text={secondaryCallToAction?.linkText} href={secondaryCallToAction?.url}  variant="outlined"  secondaryColor sx={{mb: 2}} />}
                </Grid>
              {/*<Grid item xs={12} md={6} sx={{display: {xs: "block", sm: "none"}}}>
                {primaryCallToAction && <ActionButton text={primaryCallToAction?.linkText} href={primaryCallToAction?.url} variant="contained"  secondaryColor sx={{mr: 5}} />}
                </Grid>
                <Grid item xs={12} md={6} sx={{display: {xs: "block", sm: "none"}}}>
                {secondaryCallToAction &&  <ActionButton text={secondaryCallToAction?.linkText} href={secondaryCallToAction?.url}  variant="outlined"  secondaryColor/>}
                </Grid>*/}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
