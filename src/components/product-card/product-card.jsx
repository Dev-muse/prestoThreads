import './product-card.scss';
import {CartContext} from '../../context/cart.context';
import {useContext} from 'react';
// component
import Button from '../button/button';

const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product
    const {addItemToCart,cartItems} = useContext(CartContext);
    const addProductToCart = ()=>addItemToCart(product);

  return (
    <div className="product-card-container">
    <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className="name">{name}</span> 
            <span className="cost">£{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
    </div>
  )
}

export default ProductCard