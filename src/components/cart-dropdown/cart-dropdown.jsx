import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/cart.context';

import Button from '../button/button';
import CartItem from '../cart-item/cart-item';

import {CardDropdownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CardDropdownContainer>
      <CartItems>
       { 
       cartItems.length?
       (cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))): (<EmptyMessage>Your cart is empty</EmptyMessage>)
        
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CardDropdownContainer>
  );
};

export default CartDropdown;