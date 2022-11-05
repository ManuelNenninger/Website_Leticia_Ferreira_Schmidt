import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Footer from "./components/organisms/footer"
import dynamic from 'next/dynamic'
import { useAppContext } from "./appContext";

//AbbBar muss aufgrund eines Bugs Client Side gerenderd werden. Nicht pre-rendered.
const AppBar = dynamic(
    () => import('./components/organisms/appBar'),
    { ssr: false }
)
export default function Layout(props){
  const theme = useTheme();
  const value = useAppContext();

  return(
      <>
      <Box
        id="main_BackgroundColor"
        sx={{backgroundColor: theme.palette.primary.main,}}
      >
        <Box
          id="main_Frame"
          sx={{
          maxWidth: "1680px",
          mx: "auto",
          }}
        >
          <AppBar primaryCallToAction={props?.primaryCallToAction}>
            <main>{props.children}</main>
            <Footer footerContent={props.footerContent}/>
          </AppBar>
        </Box>
      </Box>
      </>
  )
}
