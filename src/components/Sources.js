import React from 'react'
import source from '../assetr/cort.png'
import rectangle from '../assetr/lineimg.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom';

const Sources = () => {
    const navigate = useNavigate();
    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 8,
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
            <div className='container-fluid favouritone-slider mt-3 linebottom'>
            <div className='d-flex mt-2'>
            <img src={rectangle} width={15} alt="" />
         <p className='mb-0 px-2 mt-2 font-14 poppins colorpurpple'>today’s </p>
            </div>
                <h6 className='mb-3 mt-3 poppins font-20 weight-600'>browse by category</h6>
                <div className="row">
                <div className="col-12 mb-3">
                
                <Slider {...settings}>
                    <div className='ItemName text-center p-3'>
                        <div className='d-flex justify-content-center'>
                            <img src={source} className='w-50' alt="" />
                        </div>
                        <p className='font-8 poppins mb-0 '>Item Name</p>
                    </div>
                    <div className='ItemName text-center p-3'>
                        <div className='d-flex justify-content-center'>
                            <img src={source} className='w-50' alt="" />
                        </div>
                        <p className='font-8 poppins mb-0 '>Item Name</p>
                    </div>
                    <div className='ItemName text-center p-3'>
                        <div className='d-flex justify-content-center'>
                            <img src={source} className='w-50' alt="" />
                        </div>
                        <p className='font-8 poppins mb-0 '>Item Name</p>
                    </div>
                    <div className='ItemName text-center p-3'>
                        <div className='d-flex justify-content-center'>
                            <img src={source} className='w-50' alt="" />
                        </div>
                        <p className='font-8 poppins mb-0 '>Item Name</p>
                    </div>
                    <div className='ItemName text-center p-3'>
                        <div className='d-flex justify-content-center'>
                            <img src={source} className='w-50' alt="" />
                        </div>
                        <p className='font-8 poppins mb-0 '>Item Name</p>
                    </div>
                    <div className='ItemName text-center p-3'>
                        <div className='d-flex justify-content-center'>
                            <img src={source} className='w-50' alt="" />
                        </div>
                        <p className='font-8 poppins mb-0 '>Item Name</p>
                    </div>
                    <div className='ItemName text-center p-3'>
                        <div className='d-flex justify-content-center'>
                            <img src={source} className='w-50' alt="" />
                        </div>
                        <p className='font-8 poppins mb-0 '>Item Name</p>
                    </div>
                    <div className='ItemName text-center p-3'>
                        <div className='d-flex justify-content-center'>
                            <img src={source} className='w-50' alt="" />
                        </div>
                        <p className='font-8 poppins mb-0 '>Item Name</p>
                    </div>
                    <div className='ItemName text-center p-3'>
                        <div className='d-flex justify-content-center'>
                            <img src={source} className='w-50' alt="" />
                        </div>
                        <p className='font-8 poppins mb-0 '>Item Name</p>
                    </div>
                </Slider>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Sources
