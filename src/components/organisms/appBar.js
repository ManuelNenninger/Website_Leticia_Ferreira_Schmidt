import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import ActionButton from "../atoms/buttons/actionButton";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";
import Menu from '@mui/material/Menu';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};


export default function ElevateAppBar(props){
const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const ResponsiveMenu = (props) =>{
    return(
      <>
      <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
      color="inherit"
    >
      <MenuIcon />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      <Link href={toString(props?.primaryCallToAction?.url)}>
        <MenuItem onClick={handleCloseNavMenu} >
            <Typography textAlign="center">{props?.primaryCallToAction?.linkText}</Typography>
        </MenuItem>
      </Link>
    </Menu>
      </>
    )
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            backdropFilter: "blur( 4px )",
            borderBottom: "1px solid rgba( 255, 255, 255, 0.18 )"
          }}
        >
          <Toolbar
            sx={{width: "100%", maxWidth: 1680, mx: "auto"}}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: "'Comfortaa', cursiv", fontWeight: "600" }}>
              <Link href="/">
                {props?.brandName}
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <ResponsiveMenu />
            </Box>
            <Box sx={{display: {xs: "none", md: "block"}}}>
              {props?.primaryCallToAction && <ActionButton variant="contained" text={props?.primaryCallToAction?.linkText} secondaryColor href={props?.primaryCallToAction?.url} />}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Box>{props.children}</Box>
    </React.Fragment>
  );
}
