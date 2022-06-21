import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from '@mui/system';

let theme = createTheme({
  palette:{
    type: 'dark',
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#07ff87',
    }
  },
  typography:{
    h3:{
      color:'primary.main',
      fontSize:'2.1rem'
    },
    h5:{
      fontSize:'1.6em'
    },
    h6:{
      fontSize:'1.3em'
    }
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
