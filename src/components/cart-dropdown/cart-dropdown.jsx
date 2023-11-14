import './cart-dropdown.scss';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import {CartContext} from '../../context/cart.context.jsx' 
import {useContext} from 'react';
import {Link} from 'react-router-dom'
const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
        <div className="cart-items">
           {cartItems.map(cartItem=><CartItem key={cartItem.id} cartItem={cartItem}/>)}
        </div>
        <Link to='/checkout'><Button >Checkout</Button></Link>
        
    </div>
  )
}

export default CartDropdown;