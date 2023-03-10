import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{basket, user}] = useStateValue();
    var ind = user?.email.indexOf("@");

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    return (
        <div className='header'>
            <Link to="/" >
              <img className="header__logo1" src="assets/header_prime_logo.png" alt="" />
            </Link>
            {/* <img className="header__logo2" src="assets/header_delivery.png" alt="" /> */}

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} className="header__option">
                        <span className="header__optionLineOne">Hello, {!user ? 'Guest' : capitalize(user.email.slice(0, ind))}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                < a href="https://www.amazon.in/gp/css/order-history?ref_=nav_orders_first">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div></a>
                <a href="https://www.amazon.in/gp/css/homepage.html?ref_=nav_youraccount_btn">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Account</span>
                </div></a>
                <Link to="/checkout" >
                  <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLinetwo header__optionbasketCount">{basket?.length}</span>
                  </div>
                </Link>
            </div>
        </div>
    )
}
 
 export default Header
 