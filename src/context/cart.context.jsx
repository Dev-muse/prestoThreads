import { useState,useEffect,createContext } from 'react';
 
// helper function
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



 


export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : ()=>{},
    addItemToCart : ()=>{},
    cartCount:0
})

export const CartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(()=>{
        const newCartItems = cartItems.reduce((cartTotal,cartItem)=>cartTotal+cartItem.quantity,0)
       setCartCount(newCartItems)
    },[cartItems])



    // triggered when product add to cart clicked
    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const value = {isCartOpen, setIsCartOpen,addItemToCart,cartItems,cartCount}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )

}