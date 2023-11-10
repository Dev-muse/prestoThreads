import {Outlet,Link} from 'react-router-dom';
import {Fragment,useContext} from 'react';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';

import { UserContext } from '../../context/user.context';
import {CartContext} from '../../context/cart.context';


//assets
import  ShopLogo from '../../assets/logo.svg';
import './navigation.scss';


const Navigation = ()=>{

  const {currentUser} = useContext(UserContext);
  const {setIsCartOpen,isCartOpen} = useContext(CartContext);
 

 return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
             <img src={ShopLogo} width="300"  alt="logo" className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link to="/shop" className = "nav-link">SHOP</Link>
                
                {currentUser? (<span onClick={signOutUser} className='nav-link'>Sign Out</span>):
                (<Link to="/auth" className = "nav-link">Sign In</Link>)}
                              
                <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        {/* child route elements rendered here: */}
        <Outlet />
      </Fragment>
    )
  }
  
export default Navigation