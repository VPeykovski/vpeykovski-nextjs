import { createTheme, ThemeOptions } from '@mui/material/styles';

const colors = {
    blue: {
      light: '#F3FDFF',
      main: '#32A9FE',
      dark: '#294E85',
    },
    yellow: {
      main: '#FFCB57',
    },
    gray: {
      main: '#F5F5F5',
      
    },
    typography:{
      main:"#909096",
      secondary:"#FFFFFF"
    },
    black:{
      main:"#1D1D1D",
      nav:"#181818",
      header:"#000000",
      buttonBorder:"#282828"
    }
  }

const themeOptions: ThemeOptions = {
    palette: {
      mode: 'light',
      primary: {
        light: colors.blue.light,
        main: colors.blue.main,
        dark: colors.blue.dark,
      },
      secondary: {
        main: colors.yellow.main,
        light: colors.gray.main,
      },
      background: {
        default: colors.black.main,
        nav:colors.black.nav,
        header:colors.black.header,
      },
      buttonBorder:{
        main:colors.black.buttonBorder
      },
      typography:{
        main:colors.typography.main,
        secondary:colors.typography.secondary
      }
    
    },
}
export const theme = createTheme(themeOptions)
