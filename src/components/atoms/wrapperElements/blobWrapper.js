import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import { useTheme } from '@mui/material/styles';

export default function BlobWrapper({ children }) {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ position: "relative", }}>
        <Box
          sx={{
            position: "relative",
            zIndex: "1",
          }}
        >
          {children}
        </Box>
        {/*<SvgIcon
          sx={{
            height: 300,
            width: 300,
            display: "block",
            position: "absolute",
            top: -120,
            left: -120
          }}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 200 200"
        >
          <path
            fill="rgb(97, 53, 38)"
            d="M32.6,-30.6C44.1,-21.2,56.3,-10.6,55.8,-0.5C55.3,9.6,42,19.2,30.6,29.8C19.2,40.4,9.6,52.1,-6.4,58.5C-22.4,64.9,-44.9,66.1,-58.6,55.5C-72.4,44.9,-77.4,22.4,-74.3,3.1C-71.2,-16.2,-59.9,-32.5,-46.2,-41.8C-32.5,-51.1,-16.2,-53.5,-2.8,-50.7C10.6,-47.9,21.2,-39.9,32.6,-30.6Z"
            transform="translate(100 100)"
          />
        </SvgIcon>*/}
        {/*<SvgIcon
          sx={{
            height: {xs: 300, md:700},
            width: {xs: 300, md:700},
            display: "block",
            position: "absolute",
            bottom: {xs: -100, md: -300},
            right: {xs: -100, md: -300},
          }}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 200 200"
        >
          <path
            fill={theme.palette.secondary.main}
            d="M32.6,-30.6C44.1,-21.2,56.3,-10.6,55.8,-0.5C55.3,9.6,42,19.2,30.6,29.8C19.2,40.4,9.6,52.1,-6.4,58.5C-22.4,64.9,-44.9,66.1,-58.6,55.5C-72.4,44.9,-77.4,22.4,-74.3,3.1C-71.2,-16.2,-59.9,-32.5,-46.2,-41.8C-32.5,-51.1,-16.2,-53.5,-2.8,-50.7C10.6,-47.9,21.2,-39.9,32.6,-30.6Z"
            transform="translate(100 100)"
          />
        </SvgIcon>*/}
      </Box>
    </>
  );
}
