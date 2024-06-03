import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';


import { UserProvider } from './context/user.context.jsx';
import { CategoriesProvider } from './context/categories.context.jsx';
import { CartProvider } from './context/cart.context.jsx';

import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux';
import { store } from './store/store.js';



ReactDOM.createRoot(document.getElementById('root')).render(
   
   <Provider store={store}>
     <BrowserRouter>
       
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
       
       </BrowserRouter>
   </Provider>
  
)
