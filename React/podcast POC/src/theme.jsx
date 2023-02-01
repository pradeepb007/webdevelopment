import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    h2: {
      fontFamily: "Unilever Shilling Medium",
      fontSize: '1.5rem',
    },
    h3: {
      fontFamily: "Unilever Shilling Medium",
      fontSize: '1.15rem',
    },

    body1: {
      fontFamily: "Unilever Shilling",
      fontSize: '1rem',
    },
  },

});

  export default theme;