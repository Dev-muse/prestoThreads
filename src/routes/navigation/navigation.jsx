import {Outlet,Link} from 'react-router-dom';
import {Fragment,useContext} from 'react';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';

import { UserContext } from '../../context/user.context';
import {CartContext} from '../../context/cart.context';


//assets
import  ShopLogo from '../../assets/logo.svg';
import {NavigationContainer,LogoContainer,NavLinks,NavLink} from './navigation.styles';


const Navigation = ()=>{

  const {currentUser} = useContext(UserContext);
  const {setIsCartOpen,isCartOpen} = useContext(CartContext);
 

 return (
      <Fragment>
        
            <NavigationContainer>
             
              <LogoContainer to='/'>
                <img src={ShopLogo} width="300"  alt="logo" className="logo" />
              </LogoContainer>
               
              <NavLinks>
                  <NavLink to="/shop" >SHOP</NavLink>
              
                  {currentUser? (<NavLink as="span" onClick={signOutUser} >Sign Out</NavLink>):
                  (<NavLink to="/auth">Sign In</NavLink>)}
              
                  <CartIcon />
              </NavLinks>
              {isCartOpen && <CartDropdown />}
            </NavigationContainer>
        {/* child route elements rendered here: */}
        <Outlet />
      </Fragment>
    )
  }
  
export default Navigation