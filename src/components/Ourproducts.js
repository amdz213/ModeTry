import React from 'react';
import window from '../assetr/realeimg.svg';
import window1 from '../assetr/realeimgone.svg';
import window2 from '../assetr/realeimgtwo.svg';
import rectangle from '../assetr/lineimg.png'
import { Link, useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
const Ourproducts = () => {
    const navigate = useNavigate();
    const settings4 = {
        dots: false,
        speed: 5000,
        autoplay: false,
        autoplaySpeed: 1500,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
           
            <div className="container-fluid mt-3 window-Card">
            <div className='d-flex mb-3'>
            <img src={rectangle} width={15} alt="" />
         <p className='mb-0 ps-2 mt-2 font-14 poppins colorpurpple'>our products </p>
            </div>
                <div className='d-flex justify-content-between '>
                    <div>
                        <h6 className='poppins font-22 fw-semibold mb-0 colorpurpple'>just for you</h6>
                    </div>
                  
                </div>
                <div className="row justify-content-center mt-3">
                    <div className=" col-12 ps-0 window-Card poppins linebottom">
                        <Slider {...settings4}>
                        <div className="px-2" onClick={()=>navigate('/')}>
                        <div className="maincard  point position-relative">
                        <div></div>
                            <img src={window} className='w-100 h-100' alt="" />
                            <div className='mb-3 px-2 mt-2'>
                            <h6 className='font-18 font-500 poppins colorblack colorblack'>Item Name with Item Details</h6>
                            <p className='font-14  poppins'>Item Name with Item Details</p>
                            <p className='font-10  poppins mb-0 mt-2'>$ 000</p>
                            <div className="d-flex align-items-center justify-content-between mt-2">
                                <div className='d-flex align-items-center'>
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <p className='font-8  poppins mb-0 ms-3'>4.5</p>
                                </div>
                                <p className="mb-0 font-12 poppins ms-4" style={{ color: '#000000' }}>923 Sale</p>
                            </div>
                           
                            </div>
                         
                        </div>
                    </div>
                        <div className="px-2" onClick={()=>navigate('/')}>
                        <div className="maincard  point position-relative">
                        <div></div>
                            <img src={window1} className='w-100 h-100' alt="" />
                            <div className='mb-3 px-2 mt-2'>
                            <h6 className='font-18 font-500 poppins colorblack'>Item Name with Item Details</h6>
                            <p className='font-14  poppins'>Item Name with Item Details</p>
                            <p className='font-10  poppins mb-0 mt-2'>$ 000</p>
                            <div className="d-flex align-items-center justify-content-between mt-2">
                                <div className='d-flex align-items-center'>
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <p className='font-8  poppins mb-0 ms-3'>4.5</p>
                                </div>
                                <p className="mb-0 font-12 poppins ms-4" style={{ color: '#000000' }}>923 Sale</p>
                            </div>
                           
                            </div>
                         
                        </div>
                    </div>
                        <div className="px-2" onClick={()=>navigate('/')}>
                        <div className="maincard  point position-relative">
                        <div></div>
                            <img src={window2} className='w-100 h-100' alt="" />
                            <div className='mb-3 px-2 mt-2'>
                            <h6 className='font-18 font-500 poppins colorblack'>Item Name with Item Details</h6>
                            <p className='font-14  poppins'>Item Name with Item Details</p>
                            <p className='font-10  poppins mb-0 mt-2'>$ 000</p>
                            <div className="d-flex align-items-center justify-content-between mt-2">
                                <div className='d-flex align-items-center'>
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <p className='font-8  poppins mb-0 ms-3'>4.5</p>
                                </div>
                                <p className="mb-0 font-12 poppins ms-4" style={{ color: '#000000' }}>923 Sale</p>
                            </div>
                           
                            </div>
                         
                        </div>
                    </div>
                        <div className="px-2" onClick={()=>navigate('/')}>
                        <div className="maincard  point position-relative">
                        <div></div>
                            <img src={window} className='w-100 h-100' alt="" />
                            <div className='mb-3 px-2 mt-2'>
                            <h6 className='font-18 font-500 poppins colorblack colorblack'>Item Name with Item Details</h6>
                            <p className='font-14  poppins'>Item Name with Item Details</p>
                            <p className='font-10  poppins mb-0 mt-2'>$ 000</p>
                            <div className="d-flex align-items-center justify-content-between mt-2">
                                <div className='d-flex align-items-center'>
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <p className='font-8  poppins mb-0 ms-3'>4.5</p>
                                </div>
                                <p className="mb-0 font-12 poppins ms-4" style={{ color: '#000000' }}>923 Sale</p>
                            </div>
                           
                            </div>
                         
                        </div>
                    </div>
                        <div className="px-2" onClick={()=>navigate('/')}>
                        <div className="maincard  point position-relative">
                        <div></div>
                            <img src={window1} className='w-100 h-100' alt="" />
                            <div className='mb-3 px-2 mt-2'>
                            <h6 className='font-18 font-500 poppins colorblack'>Item Name with Item Details</h6>
                            <p className='font-14  poppins'>Item Name with Item Details</p>
                            <p className='font-10  poppins mb-0 mt-2'>$ 000</p>
                            <div className="d-flex align-items-center justify-content-between mt-2">
                                <div className='d-flex align-items-center'>
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <p className='font-8  poppins mb-0 ms-3'>4.5</p>
                                </div>
                                <p className="mb-0 font-12 poppins ms-4" style={{ color: '#000000' }}>923 Sale</p>
                            </div>
                           
                            </div>
                         
                        </div>
                    </div>
                        <div className="px-2" onClick={()=>navigate('/')}>
                        <div className="maincard  point position-relative">
                        <div></div>
                            <img src={window2} className='w-100 h-100' alt="" />
                            <div className='mb-3 px-2 mt-2'>
                            <h6 className='font-18 font-500 poppins colorblack'>Item Name with Item Details</h6>
                            <p className='font-14  poppins'>Item Name with Item Details</p>
                            <p className='font-10  poppins mb-0 mt-2'>$ 000</p>
                            <div className="d-flex align-items-center justify-content-between mt-2">
                                <div className='d-flex align-items-center'>
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <FaStar color='#E9A426' className='' size={15} />
                                <p className='font-8  poppins mb-0 ms-3'>4.5</p>
                                </div>
                                <p className="mb-0 font-12 poppins ms-4" style={{ color: '#000000' }}>923 Sale</p>
                            </div>
                           
                            </div>
                         
                        </div>
                    </div>
                       
                        </Slider>
                        <div className='text-center mt-3 mb-3'>
                        <button className='btn-purppls px-3 py-2'>view all products</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Ourproducts;
