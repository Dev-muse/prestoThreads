import {Footer,Name,Price, ProductCardContainer} from  './product-card.styles.jsx';
import {CartContext} from '../../context/cart.context';
import {useContext} from 'react';
// component
import Button, {BUTTON_TYPE_CLASSES} from '../button/button';

const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product
    const {addItemToCart,cartItems} = useContext(CartContext);
    const addProductToCart = ()=>addItemToCart(product);

  return (
    <ProductCardContainer>
    <img src={imageUrl} alt={name} />
        <Footer>
            <Name>{name}</Name> 
            <Price>£{price}</Price>
        </Footer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard