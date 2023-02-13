import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from '@mui/system';



const theme = createTheme({

  palette:{
    
    primary: {
      bright: '#9eeeee',
      light:'#44BDBB',
      mid: '#007A79',
      main: '#006666',
      dark: '#005252'
    },
    secondary: {
      light: '#e0e0e0',
      main: '#7A7A7A',
      dark: '#333333'
    }
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important"
  },
  typography:{

    fontFamily:'Montserrat',
    // h3:{
    //   color:'primary.main',
    //   fontSize:'1.9rem'
    // },
    // h5:{
    //   fontSize:'1.2em'
    // },
    // h6:{
    //   fontSize:'1.1em'
    // }
  },
  '&::-webkit-scrollbar': {
    width: '0.4em'
  },
  '&::-webkit-scrollbar-track': {
    '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.2)',
    borderRadius: 2
    
  },
  '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'rgba(0,0,0,.4)',
      
    }

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
   
      <App />
    
  </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
