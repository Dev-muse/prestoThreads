import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';


import { UserProvider } from './context/user.context.jsx';
import { ProductsProvider } from './context/products.context.jsx';
import { CartProvider } from './context/cart.context.jsx';

import App from './App.jsx'
import './index.scss'



ReactDOM.createRoot(document.getElementById('root')).render(
   
   <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>     
    </UserProvider>
  </BrowserRouter>
  
)
