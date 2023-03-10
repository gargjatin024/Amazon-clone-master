import React from 'react';
import "./Home.css";
import Product from "./Product.js";

function Home() {
    return (
        <div classNme="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

                <div className="home__row">
                    <Product 
                        id={0}
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" 
                        price={320} 
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" 
                    />
                    <Product 
                        id={1}
                        title="Hooked: How to Build Habit-Forming Products" 
                        price={447} 
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51DlnjccG-L._SX322_BO1,204,203,200_.jpg" 
                    />
                    <Product 
                        id={8}
                        title="Fastrack New Reflex Play|AMOLED Display|100 + Watchfaces|in-Built Games|24x7 HRM|BP Monitor|SpO2|Sleep Monitor|25+ Sports Modes|Custom Watchface|7 Day* Battery|Camera & Music Control|IP68" 
                        price={3995} 
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71MXBWGALUL._UX679_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id={2}
                        title="Can't Hurt Me: Master Your Mind and Defy the Odds" 
                        price={720} 
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/410MI8gKwzL._SX331_BO1,204,203,200_.jpg"
                    />
                    <Product 
                        id={3}
                        title="Atomic Habits: The life-changing million copy bestseller" 
                        price={400} 
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
                    />
                    <Product 
                        id={7}
                        title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)" 
                        price={4500} 
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51n3W50UxsL.jpg"
                    />
                   
                </div>
                <div className="home__row">
                <Product 
                        id={4}
                        title="To Sell is Human: The Surprising Truth About Persuading, Convincing, and Influencing Others" 
                        price={260} 
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51xM8OfmPGL._SX324_BO1,204,203,200_.jpg"
                    />
                    <Product 
                        id={5}
                        title="Seagate Expansion 1.5 TB External HDD - USB 3.0 for PC Laptop, 3 yr Data Recovery Services, Portable Hard Drive (STEA1500400)" 
                        price={4300} 
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71p2W9Ykh7L._AC_AA180_.jpg"
                    />
                    <Product 
                        id={6}
                        title="SanDisk Cruzer Blade 32GB USB Flash Drive" 
                        price={299} 
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61DjwgS4cbL._SX569_.jpg"
                    />
                </div>


            </div>
        </div>
    );
}

export default Home
