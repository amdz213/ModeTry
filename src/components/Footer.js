import React from 'react';
import QrCode from '../assetr/qrcode.png'
import GooglePlay from '../assetr/googleimg.png'
import AppStore from '../assetr/AppStore.png'
import send from '../assetr/icon-send.png'
import { FaFacebookF } from 'react-icons/fa'
import { CiTwitter } from 'react-icons/ci'
import { BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="container-fluid poppins" style={{backgroundColor:'#000'}}>
                <div className="container footer">
                    <div className="row mt-5 text-white">
                        <div className="col-lg-3 col-md-6  col-12  mt-lg-5 mt-md-4 mt-3">
                            <h5 className="poppins weight-600 font-20 point">Exclusive</h5>
                            <p className="poppins weight-500 font-18 mt-4 point">Subscribe</p>
                            <p className="poppins font-16 point">Get 10% off your first order</p>
                            <div class="input-group f-input mb-3" style={{border:'2px solid white', borderRadius:'4px', width:'80%'}}>
                                <input type="text" class="form-control font-16 border-0 rounded-0 " placeholder="Enter Your Email" aria-label=""/>
                                    <button class="btn" type="button" id=""><img src={send} width={30} alt="" /></button>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6  col-12 mt-lg-5 mt-md-4 mt-3 ">
                            <h5 className="font-20 poppins point">Support</h5>
                            <div className="poppins font-14 point">
                                <p className='mt-4'>Store Location XYZ</p>
                                <p>modetry@gmail.com</p>
                                <p>+00000-00000-0000</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6  col-12 mt-lg-5 mt-md-4 mt-3">
                            <h5 className="font-20 poppins point">Account</h5>
                            <div className="poppins font-14 ms-2">
                                <Link  to='/account'><p className='point mb-0 mt-2 text-white'>My Account</p></Link>
                                <Link><span className='point mb-3 mt-4 text-white' to='/login' > Login /</span> <span className='mb-3 mt-4 point text-white' to='/signUp'>Register</span> </Link>
                                <Link to='/cart'> <p className='point mb-0 mt-2 text-white'>Cart</p></Link>
                                <Link to='/wishlist'><p className='point mb-0 mt-2 text-white'>Wishlist</p> </Link>
                                <Link to='/'><p className='point mb-0 mt-2 text-white'>Shop</p> </Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6  col-12 mt-lg-5 mt-md-4 mt-3">
                            <h5 className="font-20 poppins point">Quick Link</h5>
                            <div className="poppins font-14 ms-2">
                                <p className='mt-4 point'>Privacy Policy</p>
                                <p className='point'>Terms Of Use</p>
                                <p className='point'>FAQ</p>
                                <p className='point'>Contact</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6  col-12 mt-lg-5 mt-md-4 mt-3 position-relative">
                            <div className="mb-auto">
                                <h5 className="font-20 poppins point"> Download App</h5>
                                <p className="font-12 mt-4 point">Save $3 with App New User Only</p>
                                <div className="d-flex">
                                    <div className="">
                                        <img src={QrCode} width={60}  alt="" />
                                    </div>
                                    <div className="ms-2">
                                        <img src={GooglePlay} width={50} alt="" /> <br />
                                        <img src={AppStore} width={50} className='mt-1' alt="" />
                                    </div>
                                </div>
                                <div className="mt-3 point">
                                    <FaFacebookF size={22} />
                                    <CiTwitter size={26} className='ms-4' />
                                    <BsInstagram size={22} className='ms-4' />
                                    <FaLinkedinIn size={22} className='ms-4' />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <p className="font-14 poppins text-center">
                        Copyright  2022. All right reserved
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;
