import {useContext} from 'react';
import {CartContext}  from '../../context/cart.context.jsx'


import {Name,Quantity,Price,ImageContainer,CheckOutItemContainer,RemoveBtn}
from './checkout-item.styles.jsx';


const CheckoutItem = ({cartItem}) => {
  const {clearItemFromCart,addItemToCart,removeItemToCart} = useContext(CartContext);

  
    const {name,imageUrl, price , quantity} = cartItem;

    const handleClear=()=>clearItemFromCart(cartItem);
    const addItemHandler = ()=>addItemToCart(cartItem);
    const removeItemHandler = ()=>removeItemToCart(cartItem);

    
  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>&#10095;</div>
      </Quantity>
      <Price>£{price}</Price>
      <RemoveBtn onClick={handleClear}>&#10005;</RemoveBtn>
    
    </CheckOutItemContainer>
  )
}

export default CheckoutItem