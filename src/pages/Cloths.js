// Home.js
import React from 'react';
import MyNavbar from '../components/MyNavbar';
import ModetrySlider from '../components/ModetrySlider';
import Myaccordain from '../components/Myaccordion';
import WindowCard from '../components/WindowCard';
import Sources from '../components/Sources';
import Bestselling from '../components/Bestselling';
import black from '../assetr/blackimg.png'
import Footer from '../components/Footer';
import Servies from '../assetr/Services.png'
import mic from '../assetr/mic.png'
import security from '../assetr/tick.png'
import Ourproducts from '../components/Ourproducts';

const Cloths = () => {

    return (
        <div>
            <MyNavbar />
            {/* Hera section */}
            <div className="container py-5">
                <WindowCard />
                <Sources />
                <Bestselling />
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-3">
                            <img src={black} className='w-100' alt="" />
                        </div>
                    </div>
                </div>
                <Ourproducts />
                <div className="container">
                    <div className='row justify-content-center mt-5 poppins'>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='text-center'>
                                <img src={Servies} width={100} alt="" />
                            </div>
                            <div className='text-center mt-3'>
                                <h6 className=' font-20 fw-semibold'>FREE AND FAST DELIVERY</h6>
                                <p className=' font-14'>Free delivery for all orders over $140</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='text-center'>
                                <img src={mic} width={100} alt="" />
                            </div>
                            <div className='text-center mt-3'>
                                <h6 className=' font-20 fw-semibold'>24/7 CUSTOMER SERVICE</h6>
                                <p className=' font-14'>Friendly 24/7 customer support</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='text-center'>
                                <img src={security} width={100} alt="" />
                            </div>
                            <div className='text-center mt-3'>
                                <h6 className=' font-20 fw-semibold'>MONEY BACK GUARANTEE</h6>
                                <p className=' font-14'>We return money within 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
};

export default Cloths;
