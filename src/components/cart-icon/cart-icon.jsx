import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {useContext} from 'react';
import {CartContext} from '../../context/cart.context';

// assets
import './cart-icon.styles.scss';


const CartIcon = () => {
  const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
  const toggleCart = ()=> setIsCartOpen(!isCartOpen);
  return (
    <div onClick={toggleCart} className='cart-icon-container'>
        <ShoppingIcon className="shopping-icon" />
        <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon