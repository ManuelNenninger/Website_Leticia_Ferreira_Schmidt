import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import SectionWrapper from "../atoms/wrapperElements/sectionWrapper"
import Divider from '@mui/material/Divider';
import { useAppContext } from "../../appContext";

export default function BoxSx(props) {
  let value = useAppContext();
  let { brandName = "", locationName = "", telephoneNumber = "", socialFacebook = "", socialInstagram = "", socialTwitter = ""} = props.footerContent

  const SocialGrid = (props) => {
    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
          sx={{ }}
        >
          <Grid item>
            <IconButton color="secondary" aria-label="add an alarm" href={"https://www.instagram.com/" + socialInstagram + "/"}>
              <InstagramIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="secondary" aria-label="add an alarm" href={"https://www.facebook.com/" + socialFacebook + "/"}>
              <FacebookRoundedIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton color="secondary" aria-label="add an alarm" href={"https://www.twitter.com/" + socialTwitter + "/"}>
              <TwitterIcon />
            </IconButton>
          </Grid>
        </Grid>
      </>
    );
  };

  const InfoGrid = (props) => {
    return (
      <>
        {" "}
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems={{xs: "center", md: "flex-end"}}
          spacing={1}
          sx={{ float: "right"}}
        >
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={1}
            >
              <Grid item>
                {" "}
                <LocationOnOutlinedIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  {locationName}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={1}
            >
              <Grid item>
                {" "}
                <PhoneAndroidOutlinedIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  {telephoneNumber}
                </Typography>
              </Grid>
            </Grid>
            </Grid>
            <Grid item>
              <SocialGrid />
            </Grid>
        </Grid>
      </>
    );
  };

  return (
    <SectionWrapper footer>
    <Divider  sx={{}}/>
        <Grid
          container
          direction="row"
          justifyContent={{xs: "center", md: "flex-end"}}
          alignItems="flex-start"
          sx={{  pb: 5, pt: 3 }}
        >
          <Grid item xs={12} md={6} sx={{width: "100%", justifyContent: {xs: "center", md: "none"}, display: {xs: "flex", md: "block"}  }}>
            <Typography variant="h5" gutterBottom>
              {brandName}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{width: "100%"}}>
            <InfoGrid />
          </Grid>
        </Grid>
      </SectionWrapper>
  );
}
