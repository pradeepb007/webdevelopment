import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../src/assets/css/app.scss"
import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode> 
    
    <Provider store={store}>
      <BrowserRouter>  
      <GoogleOAuthProvider clientId="306686713227-dut5svuo23isu07sscih48f699m2u248.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>      
      </BrowserRouter>
      </Provider>
   
  </React.StrictMode>
);

reportWebVitals();
