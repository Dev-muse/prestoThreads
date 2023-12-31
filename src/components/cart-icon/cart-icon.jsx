 import {useContext} from 'react';
import {CartContext} from '../../context/cart.context';

// assets
import {CartIconContainer,ShoppingIcon,ItemCount} from './cart-icon.styles.jsx';


const CartIcon = () => {
  const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
  const toggleCart = ()=> setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleCart}  >
        <ShoppingIcon />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon