import {Outlet,Link} from 'react-router-dom';
import {Fragment} from 'react';
import  ShopLogo from '../../assets/logo.svg';
import './navigation.scss';




const Navigation = ()=>{
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
             <img src={ShopLogo} width="300"  alt="logo" className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link to="/shop" className = "nav-link">SHOP</Link>
                <Link to="/sign-in" className = "nav-link">Sign In</Link>
            </div>
        </div>
        {/* child route elements rendered here: */}
        <Outlet />
      </Fragment>
    )
  }
  
export default Navigation