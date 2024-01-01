import React from 'react'
import window from '../assetr/boyesphototwo.svg';
import addcart from '../assetr/shopping-cart.png';
import trash from '../assetr/trashimg.png';
import rectangle from '../assetr/lineimg.png'
import MyNavbar from './MyNavbar'
import { FaStar } from 'react-icons/fa6'
import Footer from './Footer';

const Wishlist = () => {
    return (
        <div>
            <MyNavbar />

            <div className="container creataccount mt-lg-5 mt-md-3 mt-3">
                <div className='d-flex justify-content-between align-items-center mb-3 px-3'>
                    <h6 className='font-18 font-600 poppins colorblack'>wishlist (4)</h6>
                    <div className=''>
                        <button className='btn-purppls px-4 py-2'> View All </button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-3 mt-3">
                        <div className="mycard  point position-relative">
                            <div><img src={trash} width={30} className='tresh' alt="" /></div>
                            <img src={window} className='w-100 ' data-bs-toggle="modal" data-bs-target="#exampleModal" alt="" />
                            <div className='mb-3 px-2 mt-2'>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <div>
                                        <h6 className='font-10 font-500 poppins'>Item Name</h6>
                                        <p className='font-10  poppins mb-0 mt-2'>$ 000 <span className='font-8 colorpurpple text-decoration-line-through'>$000</span> </p>
                                    </div>
                                    <div className=''>

                                        <p className='font-8  poppins mb-0'>4.5
                                            <FaStar color='#E9A426' className='ms-1' size={15} />
                                        </p>
                                        <p className="mb-0 font-12 poppins" style={{ color: '#000000' }}>923 Sale</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn-purppls w-100 py-2'> <span><img src={addcart} width={20} alt="" /></span> Add to cart  </button>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-3 mt-3">
                        <div className="mycard  point position-relative">
                            <div><img src={trash} width={30} className='tresh' alt="" /></div>
                            <img src={window} className='w-100 ' data-bs-toggle="modal" data-bs-target="#exampleModal" alt="" />
                            <div className='mb-3 px-2 mt-2'>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <div>
                                        <h6 className='font-10 font-500 poppins'>Item Name</h6>
                                        <p className='font-10  poppins mb-0 mt-2'>$ 000 <span className='font-8 colorpurpple text-decoration-line-through'>$000</span> </p>
                                    </div>
                                    <div className=''>

                                        <p className='font-8  poppins mb-0'>4.5
                                            <FaStar color='#E9A426' className='ms-1' size={15} />
                                        </p>
                                        <p className="mb-0 font-12 poppins" style={{ color: '#000000' }}>923 Sale</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn-purppls w-100 py-2'> <span><img src={addcart} width={20} alt="" /></span> Add to cart  </button>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-3 mt-3">
                        <div className="mycard  point position-relative">
                            <div><img src={trash} width={30} className='tresh' alt="" /></div>
                            <img src={window} className='w-100 ' data-bs-toggle="modal" data-bs-target="#exampleModal" alt="" />
                            <div className='mb-3 px-2 mt-2'>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <div>
                                        <h6 className='font-10 font-500 poppins'>Item Name</h6>
                                        <p className='font-10  poppins mb-0 mt-2'>$ 000 <span className='font-8 colorpurpple text-decoration-line-through'>$000</span> </p>
                                    </div>
                                    <div className=''>

                                        <p className='font-8  poppins mb-0'>4.5
                                            <FaStar color='#E9A426' className='ms-1' size={15} />
                                        </p>
                                        <p className="mb-0 font-12 poppins" style={{ color: '#000000' }}>923 Sale</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn-purppls w-100 py-2'> <span><img src={addcart} width={20} alt="" /></span> Add to cart  </button>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-3 mt-3">
                        <div className="mycard  point position-relative">
                            <div><img src={trash} width={30} className='tresh' alt="" /></div>
                            <img src={window} className='w-100 ' data-bs-toggle="modal" data-bs-target="#exampleModal" alt="" />
                            <div className='mb-3 px-2 mt-2'>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <div>
                                        <h6 className='font-10 font-500 poppins'>Item Name</h6>
                                        <p className='font-10  poppins mb-0 mt-2'>$ 000 <span className='font-8 colorpurpple text-decoration-line-through'>$000</span> </p>
                                    </div>
                                    <div className=''>

                                        <p className='font-8  poppins mb-0 '>4.5
                                            <FaStar color='#E9A426' className='ms-1' size={15} />
                                        </p>
                                        <p className="mb-0 font-12 poppins " style={{ color: '#000000' }}>923 Sale</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn-purppls w-100 py-2'> <span><img src={addcart} width={20} alt="" /></span> Add to cart  </button>

                            </div>

                        </div>
                    </div>

                </div>
                <div className="row justify-content-center mt-lg-5 mt-md-3 mt-3">
                    <div className='d-flex mt-2 mb-3'>
                        <img src={rectangle} width={15} alt="" />
                        <p className='mb-0 px-2 mt-2 colorpurpple'>just for you </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-3 mt-3">
                        <div className="mycard  point position-relative">
                            <div><img src={trash} width={30} className='tresh' alt="" /></div>
                            <img src={window} className='w-100 ' alt="" />
                            <div className='mb-3 px-2 mt-2'>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <div>
                                        <h6 className='font-10 font-500 poppins'>Item Name</h6>
                                        <p className='font-10  poppins mb-0 mt-2'>$ 000 <span className='font-8 colorpurpple text-decoration-line-through'>$000</span> </p>
                                    </div>
                                    <div className=''>

                                        <p className='font-8  poppins mb-0'>4.5
                                            <FaStar color='#E9A426' className='ms-1' size={15} />
                                        </p>
                                        <p className="mb-0 font-12 poppins" style={{ color: '#000000' }}>923 Sale</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn-purppls w-100 py-2'> <span><img src={addcart} width={20} alt="" /></span> Add to cart  </button>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-3 mt-3">
                        <div className="mycard  point position-relative">
                            <div><img src={trash} width={30} className='tresh' alt="" /></div>
                            <img src={window} className='w-100 ' alt="" />
                            <div className='mb-3 px-2 mt-2'>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <div>
                                        <h6 className='font-10 font-500 poppins'>Item Name</h6>
                                        <p className='font-10  poppins mb-0 mt-2'>$ 000 <span className='font-8 colorpurpple text-decoration-line-through'>$000</span> </p>
                                    </div>
                                    <div className=''>

                                        <p className='font-8  poppins mb-0'>4.5
                                            <FaStar color='#E9A426' className='ms-1' size={15} />
                                        </p>
                                        <p className="mb-0 font-12 poppins" style={{ color: '#000000' }}>923 Sale</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn-purppls w-100 py-2'> <span><img src={addcart} width={20} alt="" /></span> Add to cart  </button>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-3 mt-3">
                        <div className="mycard  point position-relative">
                            <div><img src={trash} width={30} className='tresh' alt="" /></div>
                            <img src={window} className='w-100 ' alt="" />
                            <div className='mb-3 px-2 mt-2'>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <div>
                                        <h6 className='font-10 font-500 poppins'>Item Name</h6>
                                        <p className='font-10  poppins mb-0 mt-2'>$ 000 <span className='font-8 colorpurpple text-decoration-line-through'>$000</span> </p>
                                    </div>
                                    <div className=''>

                                        <p className='font-8  poppins mb-0'>4.5
                                            <FaStar color='#E9A426' className='ms-1' size={15} />
                                        </p>
                                        <p className="mb-0 font-12 poppins" style={{ color: '#000000' }}>923 Sale</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn-purppls w-100 py-2'> <span><img src={addcart} width={20} alt="" /></span> Add to cart  </button>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-3 mt-3">
                        <div className="mycard  point position-relative">
                            <div><img src={trash} width={30} className='tresh' alt="" /></div>
                            <img src={window} className='w-100 ' alt="" />
                            <div className='mb-3 px-2 mt-2'>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <div>
                                        <h6 className='font-10 font-500 poppins'>Item Name</h6>
                                        <p className='font-10  poppins mb-0 mt-2'>$ 000 <span className='font-8 colorpurpple text-decoration-line-through'>$000</span> </p>
                                    </div>
                                    <div className=''>

                                        <p className='font-8  poppins mb-0 '>4.5
                                            <FaStar color='#E9A426' className='ms-1' size={15} />
                                        </p>
                                        <p className="mb-0 font-12 poppins " style={{ color: '#000000' }}>923 Sale</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn-purppls w-100 py-2'> <span><img src={addcart} width={20} alt="" /></span> Add to cart  </button>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img src={window} className='w-100 ' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Wishlist