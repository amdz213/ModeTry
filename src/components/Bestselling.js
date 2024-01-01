import React from 'react'
import window from '../assetr/boyesphotoone.svg';
import rectangle from '../assetr/lineimg.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Bestselling = () => {
    const navigate = useNavigate();
    const settings1 = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    initialSlide: 2
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
            <div className='container-fluid mt-5 favouritone-slider'>
            <div className='d-flex mb-3'>
            <img src={rectangle} width={15} alt="" />
         <p className='mb-0 ps-2 mt-2 font-14 poppins colorpurpple'>today’s </p>
            </div>
            <div className='d-flex justify-content-between mb-3'>
            <h6 className='mb-0 mt-3 poppins font-20 weight-600'>best selling products</h6>
            <button className='btn-purppls px-3 py-2'>View All </button>

            </div>
                <div className="row mt-3">
                <div className="col-12 ps-0">
                
                <Slider {...settings1}>
                <div className="px-2" onClick={()=>navigate('/')}>
                <div className="mycard  point position-relative">
                <div><button className='btn-purppl px-3 py-1'>15%</button></div>
                    <img src={window} className='w-100 ' alt="" />
                    <div className='mb-3 px-2 mt-2'>
                    <h6 className='font-8 font-500 poppins'>Item Name</h6>
                    <p className='font-8  poppins mb-0 mt-2'>$ 000</p>
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
                <div className="mycard  point position-relative">
                <div><button className='btn-purppl px-3 py-1'>15%</button></div>
                    <img src={window} className='w-100 ' alt="" />
                    <div className='mb-3 px-2 mt-2'>
                    <h6 className='font-8 font-500 poppins'>Item Name</h6>
                    <p className='font-8  poppins mb-0 mt-2'>$ 000</p>
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
                <div className="mycard  point position-relative">
                <div><button className='btn-purppl px-3 py-1'>15%</button></div>
                    <img src={window} className='w-100 ' alt="" />
                    <div className='mb-3 px-2 mt-2'>
                    <h6 className='font-8 font-500 poppins'>Item Name</h6>
                    <p className='font-8  poppins mb-0 mt-2'>$ 000</p>
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
                <div className="mycard  point position-relative">
                <div><button className='btn-purppl px-3 py-1'>15%</button></div>
                    <img src={window} className='w-100 ' alt="" />
                    <div className='mb-3 px-2 mt-2'>
                    <h6 className='font-8 font-500 poppins'>Item Name</h6>
                    <p className='font-8  poppins mb-0 mt-2'>$ 000</p>
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
                <div className="mycard  point position-relative">
                <div><button className='btn-purppl px-3 py-1'>15%</button></div>
                    <img src={window} className='w-100 ' alt="" />
                    <div className='mb-3 px-2 mt-2'>
                    <h6 className='font-8 font-500 poppins'>Item Name</h6>
                    <p className='font-8  poppins mb-0 mt-2'>$ 000</p>
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
                <div className="mycard  point position-relative">
                <div><button className='btn-purppl px-3 py-1'>15%</button></div>
                    <img src={window} className='w-100 ' alt="" />
                    <div className='mb-3 px-2 mt-2'>
                    <h6 className='font-8 font-500 poppins'>Item Name</h6>
                    <p className='font-8  poppins mb-0 mt-2'>$ 000</p>
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
                </div>
                </div>
            </div>
        </div>
    )
}

export default Bestselling
