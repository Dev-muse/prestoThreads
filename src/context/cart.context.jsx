import { useState,useEffect,createContext } from 'react';
 
// helper function to add cart item
const addCartItem = (cartItems,productToAdd)=>{
    // check id of cartItems === product to add 
    // if true from the find func increase quantity of existing product 
    // return new array 
    const existingCartItem = cartItems.find((item)=>item.id===productToAdd.id)
    if(existingCartItem){
        return cartItems.map((cartItem)=>
            // cartItem.id == productToAdd.id ? {...cartItem, quantity: cartItem.quantity+1}: cartItem
            cartItem.id == productToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem
            
        )
    }

    // if productToAdd id  !== cartItems add new item quantity=1
   
    return [...cartItems,{...productToAdd, quantity: 1}]
}

// helper func to remove cart item
const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
  
    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
  
    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
  


  const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
 


export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : ()=>{},
    addItemToCart : ()=>{},
    removeItemToCart : ()=>{},
    clearItemFromCart : ()=>{},
    cartCount:0,
    cartTotal: 0,
})

export const CartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
       setCartCount(newCartCount)
    },[cartItems])

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total,cartItem)=>total+cartItem.price*cartItem.quantity,0)
        setCartTotal(newCartTotal)
    },[cartItems])



    // triggered when product add to cart clicked
    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    const removeItemToCart = (cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
      };

    const value = {isCartOpen,setIsCartOpen,
                addItemToCart,removeItemToCart,
                clearItemFromCart,cartItems,
                cartCount,cartTotal}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )

}