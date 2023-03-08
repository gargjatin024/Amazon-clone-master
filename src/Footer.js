import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Footer() { 
    return (
        <div className='footer'>
            <div>
            <div className="footer__nav">    
            <Link to="/" >
              <img className="footer__logo1" src="assets/header_prime_logo.png" alt="" />
            </Link>
            {/* <img className="footer__logo2" src="assets/header_delivery.png" alt="" /> */}
            </div>
            <div className="footer__nav">
                <a href="https://www.abebooks.com/">
                <div className="footer__option">
                    <span className="footer__optionLineTwo">Abebooks</span>
                    <span className="footer__optionLineOne">Books</span>
                    <span className="footer__optionLineOne">Arts</span>
                </div>
                </a>
                <a href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter">
                <div className="footer__option">
                    <span className="footer__optionLineTwo">Amazon Web Services</span>
                    <span className="footer__optionLineOne">Scalable Cloud</span>
                    <span className="footer__optionLineOne">Computing Services</span>
                </div>
                </a>
                <a href="https://www.audible.in/">
                <div className="footer__option">
                    <span className="footer__optionLineTwo">Audible</span>
                    <span className="footer__optionLineOne">Download</span>
                    <span className="footer__optionLineOne">Audio Books</span>
                </div>
                </a>
                <a href="https://www.dpreview.com/">
                <div className="footer__option">
                    <span className="footer__optionLineTwo">DPReview</span>
                    <span className="footer__optionLineOne">Digital</span>
                    <span className="footer__optionLineOne">Photography</span>
                </div>
                </a>
                <a href="https://www.imdb.com/">
                <div className="footer__option">
                    <span className="footer__optionLineTwo">IMDb</span>
                    <span className="footer__optionLineOne">Movies, TV</span>
                    <span className="footer__optionLineOne">& Celebrities</span>
                </div>
                </a>
                </div>
                <div className="footer__nav">
                <a href="https://www.shopbop.com/">
                <div className="footer__option">
                    <span className="footer__optionLineTwo">Shopbop</span>
                    <span className="footer__optionLineOne">Designer</span>
                    <span className="footer__optionLineOne">Fashion Brands</span>
                </div>
                </a>
                <a href="">
                <div className="footer__option">
                    <span className="footer__optionLineTwo">Amazon Business</span>
                    <span className="footer__optionLineOne">Everything For</span>
                    <span className="footer__optionLineOne">Your Business</span>
                </div>
                </a>
                <a href="">
                <div className="footer__option">
                    <span className="footer__optionLineTwo">Prime Now</span>
                    <span className="footer__optionLineOne">2-Hour Delivery</span>
                    <span className="footer__optionLineOne">on Everyday Items</span>
                </div>
                </a>
                <a href="">
                <div className="footer__option">
                    <span className="footer__optionLineTwo">Amazon Prime Music</span>
                    <span className="footer__optionLineOne">90 million songs, ad-free</span>
                    <span className="footer__optionLineOne">Over 15 million podcast episodes</span>
                </div>
                </a>
                <div className="footer__option">
                <span className="footer__optionLineTwo"> </span>
                </div>
            </div>
            <div className="footer__nav">
            <div className="footer__option">
            <span className="footer__optionLineOne">© 1996-2023, Amazon.com, Inc. or its affiliates</span>
            </div>
            </div>

            </div>
        </div>
    )
}
 export default Footer
 