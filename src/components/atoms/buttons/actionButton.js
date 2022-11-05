import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

export default function ContainedActionButton(props){
  const theme = useTheme();

  const backgroundColorSelecter = {
    "outlined": "none",
    "contained": props.secondaryColor ? theme.palette.secondary.main : theme.palette.primary.main,
  }

  const backgroundColorHoverSelecter = {
    "outlined": props.secondaryColor ? theme.palette.secondary.light : theme.palette.primary.light,
    "contained": props.secondaryColor ? theme.palette.secondary.light : theme.palette.primary.light,
  }

  const textColorSelecter = {
    "outlined": props.secondaryColor ? theme.palette.secondary.main : theme.palette.primary.main,
    "contained": props.secondaryColor ? theme.palette.primary.main : theme.palette.secondary.main,
  }

  const borderColorSelecter = {
    "outlined": props.secondaryColor ? theme.palette.secondary.main : theme.palette.primary.main,
    "contained": props.secondaryColor ? theme.palette.secondary.main : theme.palette.primary.main,
  }

  //const backgroundColor = props.variant == "outlined" ? "none" : theme.palette.secondary.main;

    const BootstrapButton = styled(Button)({
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '10px 20px',
      border: '2px solid',
      borderRadius: 40,
      lineHeight: 1.5,
      backgroundColor: backgroundColorSelecter[props.variant],
      borderColor: borderColorSelecter[props.variant],
      color: textColorSelecter[props.variant],
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover':
        props.variant == "outlined" ?
        {
          border: '2px solid',
          borderColor: borderColorSelecter[props.variant],
          backgroundColor: backgroundColorHoverSelecter[props.variant],
          boxShadow: 'none',
        } :
        {
          backgroundColor: backgroundColorHoverSelecter[props.variant],
          borderColor:  borderColorSelecter[props.variant],
          boxShadow: 'none',
        },
      '&:active': {
        backgroundColor: theme.palette.secondary.light,
        borderColor:  theme.palette.secondary.light,
        boxShadow: 'none',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(97, 53, 38, 0.5)',
      },
    });

  return(
    <>
        <BootstrapButton {...props}>
            {props.text}
        </BootstrapButton>
    </>
  )
}
