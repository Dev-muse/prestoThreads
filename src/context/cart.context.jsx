import { createContext, useReducer } from 'react';

// helper func to create action for reducer
import { createAction } from '../utils/reducer/reduce.utils'


// helper function to add cart item or increase quantity of existing one
const addCartItem = (cartItems, productToAdd) => {
  // check id of cartItems === product to add 
  // if true from the find func increase quantity of existing product 
  // return new array 
  const existingCartItem = cartItems.find((item) => item.id === productToAdd.id)
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id == productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem

    )
  }

  // if productToAdd is not in existingCartItem then create new entry

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

// helper func to remove cart item
const removeCartItem = (cartItems, cartItemToRemove) => {
  // find existence of cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if it exists & quantity is 1,then remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  //if item to remove quantity not 1 then decrease by 1 , if it doesn't exist then return other items only.
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};


// filter out the item to be removed
const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);



export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  addItemToCart: () => { },
  removeItemToCart: () => { },
  clearItemFromCart: () => { },
  cartCount: 0,
  cartTotal: 0,
  cartItems: [],
})

const INITIAL_STATE = {
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false,
  cartItems: [],
}

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const cartReducer = (state, action) => {
  const { type, payload } = action


  switch (type) {

    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload }

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload }

    default:
      throw new Error(`unrecognised type ${type} in cart reducer`)

  }




}

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {


  const [{ cartItems, cartTotal, isCartOpen, cartCount }, dispatch] = useReducer(cartReducer, INITIAL_STATE)

  // reducer action func 1 
  const updateCartItemsReducer = (newCartItems) => {
    // generate newCartCount
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)

    // generat newCartTotal
    const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)

    // dispatch payload that looks like this {newCartItems, newCartTotal,newCartCount}
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount, cartTotal: newCartTotal
      })
    )


  }

  // reducer action func 2
  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))

  }



  // triggered when product add to cart clicked
  const addItemToCart = (productToAdd) => {

    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }
  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems)
  };

  const value = {
    isCartOpen, setIsCartOpen,
    addItemToCart, removeItemToCart,
    clearItemFromCart, cartItems,
    cartCount, cartTotal
  }
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )

}