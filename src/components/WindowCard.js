import React from 'react';
import windowone from '../assetr/boyesphoto.svg';
import windowtwo from '../assetr/boyesphotoone.svg';
import windowthree from '../assetr/boyesphototwo.svg';
import rectangle from '../assetr/lineimg.png'
import line from '../assetr/line.png';
import { Link, useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import BirthdayCountdown from './BirthdayCountdown';
const WindowCard = () => {
    const navigate = useNavigate();
    const settings2 = {
        dots: false,
        speed: 5000,
        autoplay: false,
        autoplaySpeed: 1500,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
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
        <>

            <div className="container-fluid mt-3 window-Card">
                <div className='d-flex mt-2'>
                    <img src={rectangle} width={15} alt="" />
                    <p className='mb-0 px-2 mt-2 font-14 poppins colorpurpple'>today’s </p>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className='row mt-3 align-items-end'>
                            <div className='col-lg-3 col-md-6 col-12'>
                                <h4 className='poppins mb-0'>Flash Sales</h4>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <BirthdayCountdown />
                            </div>
                        </div>
                    </div>
                    <div className=" col-12 mt-3 ps-0 window-Card poppins linebottom">
                        <Slider {...settings2}>
                            <div className="px-2" style={{cursor:'pointer'}} onClick={() => navigate('/productDetailspage')}>
                                <div className="mycard  point position-relative">
                                    <div><button className='btn-purppl px-3 py-1'>15%</button></div>
                                    <img src={windowone} className='w-100 ' alt="" />
                                    <div className='mb-3 px-2 mt-2'>
                                        <h6 className='font-10 font-500 poppins blackcolor'>Item Name With Item Details</h6>
                                        <p className='font-8  poppins mb-0 mt-2'>lorem ipsum</p>
                                        <p className='font-8  poppins mb-0 mt-2'>$ 000<span className='ms-3 '>$ 000</span></p>
                                        <div className="d-flex align-items-center justify-content-between mt-2">
                                            <div className='d-flex align-items-center '>
                                                <p className='font-8  poppins mb-0 me-2'>4.5</p>
                                                <FaStar color='#E9A426' className='ms-3' size={15} />
                                            </div>
                                            <p className="mb-0 font-10 poppins ms-4" style={{ color: '#000000' }}>923 Sale</p>
                                        </div>
                                        <p className='font-10  poppins mb-0 mt-2'><FaMapMarkerAlt size={10} /><span className='ms-3'>lorem ipsum</span></p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className='font-10  poppins mb-0 mt-2'>15 <span className='ms-1 font-10 poppins'>Available</span> </p>
                                            <img src={line} className='ms-3' width={50} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="px-2" style={{cursor:'pointer'}} onClick={() => navigate('/productDetailspage')}>
                                <div className="mycard  point position-relative">
                                    <div><button className='btn-purppl px-3 py-1'>15%</button></div>
                                    <img src={windowtwo} className='w-100 ' alt="" />
                                    <div className='mb-3 px-2 mt-2'>
                                        <h6 className='font-10 font-500 poppins blackcolor'>Item Name With Item Details</h6>
                                        <p className='font-8  poppins mb-0 mt-2'>lorem ipsum</p>
                                        <p className='font-8  poppins mb-0 mt-2'>$ 000<span className='ms-3 '>$ 000</span></p>
                                        <div className="d-flex align-items-center justify-content-between mt-2">
                                            <div className='d-flex align-items-center '>
                                                <p className='font-8  poppins mb-0 me-2'>4.5</p>
                                                <FaStar color='#E9A426' className='ms-3' size={15} />
                                            </div>
                                            <p className="mb-0 font-10 poppins ms-4" style={{ color: '#000000' }}>923 Sale</p>
                                        </div>
                                        <p className='font-10  poppins mb-0 mt-2'><FaMapMarkerAlt size={10} /><span className='ms-3'>lorem ipsum</span></p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className='font-10  poppins mb-0 mt-2'>15 <span className='ms-1 font-10 poppins'>Available</span> </p>
                                            <img src={line} className='ms-3' width={50} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="px-2" style={{cursor:'pointer'}} onClick={() => navigate('/productDetailspage')}>
                                <div className="mycard  point position-relative">
                                    <div><button className='btn-purppl px-3 py-1'>15%</button></div>
                                    <img src={windowthree} className='w-100 ' alt="" />
                                    <div className='mb-3 px-2 mt-2'>
                                        <h6 className='font-10 font-500 poppins blackcolor'>Item Name With Item Details</h6>
                                        <p className='font-8  poppins mb-0 mt-2'>lorem ipsum</p>
                                        <p className='font-8  poppins mb-0 mt-2'>$ 000<span className='ms-3 '>$ 000</span></p>
                                        <div className="d-flex align-items-center justify-content-between mt-2">
                                            <div className='d-flex align-items-center '>
                                                <p className='font-8  poppins mb-0 me-2'>4.5</p>
                                                <FaStar color='#E9A426' className='ms-3' size={15} />
                                            </div>
                                            <p className="mb-0 font-10 poppins ms-4" style={{ color: '#000000' }}>923 Sale</p>
                                        </div>
                                        <p className='font-10  poppins mb-0 mt-2'><FaMapMarkerAlt size={10} /><span className='ms-3'>lorem ipsum</span></p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className='font-10  poppins mb-0 mt-2'>15 <span className='ms-1 font-10 poppins'>Available</span> </p>
                                            <img src={line} className='ms-3' width={50} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="px-2" style={{cursor:'pointer'}} onClick={() => navigate('/productDetailspage')}>
                                <div className="mycard  point position-relative">
                                    <div><button className='btn-purppl px-3 py-1'>15%</button></div>
                                    <img src={windowone} className='w-100 ' alt="" />
                                    <div className='mb-3 px-2 mt-2'>
                                        <h6 className='font-10 font-500 poppins blackcolor'>Item Name With Item Details</h6>
                                        <p className='font-8  poppins mb-0 mt-2'>lorem ipsum</p>
                                        <p className='font-8  poppins mb-0 mt-2'>$ 000<span className='ms-3 '>$ 000</span></p>
                                        <div className="d-flex align-items-center justify-content-between mt-2">
                                            <div className='d-flex align-items-center '>
                                                <p className='font-8  poppins mb-0 me-2'>4.5</p>
                                                <FaStar color='#E9A426' className='ms-3' size={15} />
                                            </div>
                                            <p className="mb-0 font-10 poppins ms-4" style={{ color: '#000000' }}>923 Sale</p>
                                        </div>
                                        <p className='font-10  poppins mb-0 mt-2'><FaMapMarkerAlt size={10} /><span className='ms-3'>lorem ipsum</span></p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className='font-10  poppins mb-0 mt-2'>15 <span className='ms-1 font-10 poppins'>Available</span> </p>
                                            <img src={line} className='ms-3' width={50} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="px-2" style={{cursor:'pointer'}} onClick={() => navigate('/productDetailspage')}>
                                <div className="mycard  point position-relative">
                                    <div><button className='btn-purppl px-3 py-1'>15%</button></div>
                                    <img src={windowtwo} className='w-100 ' alt="" />
                                    <div className='mb-3 px-2 mt-2'>
                                        <h6 className='font-10 font-500 poppins blackcolor'>Item Name With Item Details</h6>
                                        <p className='font-8  poppins mb-0 mt-2'>lorem ipsum</p>
                                        <p className='font-8  poppins mb-0 mt-2'>$ 000<span className='ms-3 '>$ 000</span></p>
                                        <div className="d-flex align-items-center justify-content-between mt-2">
                                            <div className='d-flex align-items-center '>
                                                <p className='font-8  poppins mb-0 me-2'>4.5</p>
                                                <FaStar color='#E9A426' className='ms-3' size={15} />
                                            </div>
                                            <p className="mb-0 font-10 poppins ms-4" style={{ color: '#000000' }}>923 Sale</p>
                                        </div>
                                        <p className='font-10  poppins mb-0 mt-2'><FaMapMarkerAlt size={10} /><span className='ms-3'>lorem ipsum</span></p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className='font-10  poppins mb-0 mt-2'>15 <span className='ms-1 font-10 poppins'>Available</span> </p>
                                            <img src={line} className='ms-3' width={50} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="px-2" style={{cursor:'pointer'}} onClick={() => navigate('/productDetailspage')}>
                                <div className="mycard  point position-relative">
                                    <div><button className='btn-purppl px-3 py-1'>15%</button></div>
                                    <img src={windowthree} className='w-100 ' alt="" />
                                    <div className='mb-3 px-2 mt-2'>
                                        <h6 className='font-10 font-500 poppins blackcolor'>Item Name With Item Details</h6>
                                        <p className='font-8  poppins mb-0 mt-2'>lorem ipsum</p>
                                        <p className='font-8  poppins mb-0 mt-2'>$ 000<span className='ms-3 '>$ 000</span></p>
                                        <div className="d-flex align-items-center justify-content-between mt-2">
                                            <div className='d-flex align-items-center '>
                                                <p className='font-8  poppins mb-0 me-2'>4.5</p>
                                                <FaStar color='#E9A426' className='ms-3' size={15} />
                                            </div>
                                            <p className="mb-0 font-10 poppins ms-4" style={{ color: '#000000' }}>923 Sale</p>
                                        </div>
                                        <p className='font-10  poppins mb-0 mt-2'><FaMapMarkerAlt size={10} /><span className='ms-3'>lorem ipsum</span></p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className='font-10  poppins mb-0 mt-2'>15 <span className='ms-1 font-10 poppins'>Available</span> </p>
                                            <img src={line} className='ms-3' width={50} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="px-2" style={{cursor:'pointer'}} onClick={() => navigate('/productDetailspage')}>
                                <div className="mycard  point position-relative">
                                    <div><button className='btn-purppl px-3 py-1'>15%</button></div>
                                    <img src={windowone} className='w-100 ' alt="" />
                                    <div className='mb-3 px-2 mt-2'>
                                        <h6 className='font-10 font-500 poppins blackcolor'>Item Name With Item Details</h6>
                                        <p className='font-8  poppins mb-0 mt-2'>lorem ipsum</p>
                                        <p className='font-8  poppins mb-0 mt-2'>$ 000<span className='ms-3 '>$ 000</span></p>
                                        <div className="d-flex align-items-center justify-content-between mt-2">
                                            <div className='d-flex align-items-center '>
                                                <p className='font-8  poppins mb-0 me-2'>4.5</p>
                                                <FaStar color='#E9A426' className='ms-3' size={15} />
                                            </div>
                                            <p className="mb-0 font-10 poppins ms-4" style={{ color: '#000000' }}>923 Sale</p>
                                        </div>
                                        <p className='font-10  poppins mb-0 mt-2'><FaMapMarkerAlt size={10} /><span className='ms-3'>lorem ipsum</span></p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className='font-10  poppins mb-0 mt-2'>15 <span className='ms-1 font-10 poppins'>Available</span> </p>
                                            <img src={line} className='ms-3' width={50} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="px-2" style={{cursor:'pointer'}} onClick={() => navigate('/productDetailspage')}>
                                <div className="mycard  point position-relative">
                                    <div><button className='btn-purppl px-3 py-1'>15%</button></div>
                                    <img src={windowtwo} className='w-100 ' alt="" />
                                    <div className='mb-3 px-2 mt-2'>
                                        <h6 className='font-10 font-500 poppins blackcolor'>Item Name With Item Details</h6>
                                        <p className='font-8  poppins mb-0 mt-2'>lorem ipsum</p>
                                        <p className='font-8  poppins mb-0 mt-2'>$ 000<span className='ms-3 '>$ 000</span></p>
                                        <div className="d-flex align-items-center justify-content-between mt-2">
                                            <div className='d-flex align-items-center '>
                                                <p className='font-8  poppins mb-0 me-2'>4.5</p>
                                                <FaStar color='#E9A426' className='ms-3' size={15} />
                                            </div>
                                            <p className="mb-0 font-10 poppins ms-4" style={{ color: '#000000' }}>923 Sale</p>
                                        </div>
                                        <p className='font-10  poppins mb-0 mt-2'><FaMapMarkerAlt size={10} /><span className='ms-3'>lorem ipsum</span></p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className='font-10  poppins mb-0 mt-2'>15 <span className='ms-1 font-10 poppins'>Available</span> </p>
                                            <img src={line} className='ms-3' width={50} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="px-2" style={{cursor:'pointer'}} onClick={() => navigate('/productDetailspage')}>
                                <div className="mycard  point position-relative">
                                    <div><button className='btn-purppl px-3 py-1'>15%</button></div>
                                    <img src={windowthree} className='w-100 ' alt="" />
                                    <div className='mb-3 px-2 mt-2'>
                                        <h6 className='font-10 font-500 poppins blackcolor'>Item Name With Item Details</h6>
                                        <p className='font-8  poppins mb-0 mt-2'>lorem ipsum</p>
                                        <p className='font-8  poppins mb-0 mt-2'>$ 000<span className='ms-3 '>$ 000</span></p>
                                        <div className="d-flex align-items-center justify-content-between mt-2">
                                            <div className='d-flex align-items-center '>
                                                <p className='font-8  poppins mb-0 me-2'>4.5</p>
                                                <FaStar color='#E9A426' className='ms-3' size={15} />
                                            </div>
                                            <p className="mb-0 font-10 poppins ms-4" style={{ color: '#000000' }}>923 Sale</p>
                                        </div>
                                        <p className='font-10  poppins mb-0 mt-2'><FaMapMarkerAlt size={10} /><span className='ms-3'>lorem ipsum</span></p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className='font-10  poppins mb-0 mt-2'>15 <span className='ms-1 font-10 poppins'>Available</span> </p>
                                            <img src={line} className='ms-3' width={50} alt="" />
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

        </>
    );
}

export default WindowCard;
