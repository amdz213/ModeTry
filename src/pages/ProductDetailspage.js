import React, { useState } from 'react'
import window from '../assetr/manimg.png';
import addcart from '../assetr/shopping-cart.png';
import trash from '../assetr/trashimg.png';
import rectangle from '../assetr/lineimg.png'
import Imgesslider from '../components/Imgesslider'
import MyNavbar from '../components/MyNavbar'
import hand from '../assetr/hande.png'
import heart from '../assetr/haetemoji.png'
import masseges from '../assetr/message.png'
import Likes from '../assetr/like.png'
import Comments from '../assetr/comment.png'
import Save from '../assetr/save.png'
import dilimg from '../assetr/dilpic.png'
import Account from '../assetr/signup.png'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Footer from '../components/Footer'
import { FaStar } from 'react-icons/fa6';

const ProductDetailspage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MyNavbar />
      <div className="container ProductDetails creataccount py-5">
        <h6>Lorem Ipsum / lorem Ipsum / Man’s T-Shirt</h6>
        <div className="row mt-lg-5 mt-md-3 mt-3">
          <div className="col-lg-6 col-md-6 col-12">
            <Imgesslider />
          </div>
          <div className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-md-3 mt-3">
            <div className=''>
              <div className='d-flex align-items-center justify-content-between Usernamebordebottem mt-2'>
                <h6 className='mb-0 font-14 poppins'>Man’s T-Shirt</h6>
                <p className='mb-0 font-14 poppins'>$ 0000</p>
              </div>
              <div className='d-flex align-items-center justify-content-between Usernamebordebottem mt-2'>
                <div className='d-flex'>
                  <img src={hand} width={20} alt="" />
                  <img src={heart} width={20} alt="" />
                  <p className='mb-0 font-14 poppins ms-1 colorwhite'> 0.0K</p>
                </div>
                <div className='d-flex'>
                  <img src={masseges} width={20} alt="" />
                  <p className='mb-0 font-14 poppins ms-1 colorwhite'>0.0K</p>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between mb-3 mt-2'>
                <div className='d-flex'>
                  <img src={Likes} width={20} alt="" />
                  <p className='mb-0 font-14 poppins ms-1 colorwhite'> Likes</p>
                </div>
                <div className='d-flex'>
                  <img src={Comments} width={20} alt="" />
                  <p className='mb-0 font-14 poppins ms-1 colorwhite'> Comments</p>
                </div>
                <div className='d-flex'>
                  <img src={Save} width={20} alt="" />
                  <p className='mb-0 font-14 poppins ms-1 colorwhite'>Save</p>
                </div>
              </div>
              <div className='mt-3 d-flex'>
                <h4 className='mb-0'>Size:</h4>
                <div className='d-flex ps-lg-5 ps-md-3 ps-0'>
                  <div className='bg-Size px-2'><p className='mb-0'>XS</p></div>
                  <div className='bg-Size px-2 mx-2'><p className='mb-0'>S</p></div>
                  <div className='bg-Size px-2'><p className='mb-0'>M</p></div>
                  <div className='bg-Size px-2 mx-2'><p className='mb-0'>S</p></div>
                  <div className='bg-Size px-2'><p className='mb-0'>XL</p></div>
                  <div className='bg-Size px-2 mx-2'><p className='mb-0'>2XL</p></div>
                </div>
              </div>
              <div className='d-flex mt-3'>
                <div><h4>Color:</h4></div>
                <div className='ps-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="145" height="25" viewBox="0 0 145 25" fill="none">
                    <rect y="3" width="20" height="20" rx="5" fill="white" />
                    <rect x="31.5" y="1.5" width="22" height="22" rx="3.5" fill="#FF7E7E" stroke="#B42B49" stroke-width="3" />
                    <rect x="65.5" y="3.5" width="19" height="19" rx="4.5" fill="#7EF0FF" stroke="#B42B49" />
                    <rect x="95.5" y="3.5" width="19" height="19" rx="4.5" fill="#7E84FF" stroke="#B42B49" />
                    <rect x="125.5" y="3.5" width="19" height="19" rx="4.5" fill="#7EFF84" stroke="#B42B49" />
                  </svg>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-6 col-md-6 col-12 mt-l-0 mt-md-3 mt-3">
                  <div className=" product-capicty" role="group"
                    aria-label="Basic radio toggle button group">
                    <input type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio1"
                      autoComplete="off"
                      defaultChecked
                    />
                    <div className='btn-group '>

                      <label
                        className="btn"
                        onClick={() => setCount(count - 1)}
                        htmlFor="btnradio1"
                      >
                        <AiOutlineMinus />
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio2"
                        autoComplete="off"
                      />
                      <label className=" fw-medium" style={{ padding: '6px 25px ' }}>{count}</label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio3"
                        autoComplete="off"
                      />
                      <label
                        className="btn product-capicty"
                        onClick={() => setCount(count + 1)}
                        htmlFor="btnradio3"
                      >
                        <AiOutlinePlus />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-12 mt-l-0 mt-md-3 mt-3">
                  <button className='btn-purppls px-lg-2 py-2 colorblack font-20'> Try Now </button>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mt-l-0 mt-md-3 mt-3">
                  <div className='text-lg-end text-start'>
                    <button className='btn-Viewall px-4 py-2'> <img src={dilimg} width={20} alt="" /> </button>
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between Usernamebordebottem mt-3'>
                <h6 className='mb-0 font-14 poppins'>Delivery Charges:</h6>
                <p className='mb-0 font-14 poppins'>$ 000</p>
              </div>
              <div className='d-flex align-items-center justify-content-between Usernamebordebottem mb-3 mt-3'>
                <div>
                  <h6 className='mb-0 font-14 poppins'>Total Price</h6>
                  <p className='mb-0 font-14 poppins'>with VAT,SD</p>
                </div>
                <p className='mb-0 font-14 poppins'>$ 0000</p>
              </div>
              <div>
                <h6>Description:</h6>
                <p className='mb-0 font-12 poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam <a href="">Read More..</a></p>
              </div>
              <div className='d-flex align-items-center justify-content-between mt-3'>
                <h4 className='mb-0 font-20 poppins'>Reviews:</h4>
                <button className='btn-Viewall px-2'> View All </button>
              </div>
              <div className='d-flex align-items-center justify-content-between mt-3'>
                <div className='d-flex'>
                  <div><img src={Account} width={40} alt="" /></div>
                  <div className='ms-2'>
                    <h6 className='mb-0 font-14 poppins'>Lorem Ipsum</h6>
                    <p className='mb-0 font-14 poppins'><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 16 15" fill="none">
                      <path d="M7.62535 13.125C10.7386 13.125 13.2624 10.6066 13.2624 7.5C13.2624 4.3934 10.7386 1.875 7.62535 1.875C4.51208 1.875 1.98828 4.3934 1.98828 7.5C1.98828 10.6066 4.51208 13.125 7.62535 13.125Z" stroke="#B42B49" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.625 4.375V7.5L8.87768 9.375" stroke="#B42B49" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></span> <span className='colorpurpple'>00 xyz, 0000</span> </p>

                  </div>
                </div>
                <div>
                  <p className='font-14  poppins mb-0 '>4.5 <span className='colorpurpple'>Rating</span>
                  </p>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="71" height="10" viewBox="0 0 71 10" fill="none">
                      <path d="M5.86034 0L6.98532 3.45492H10.6258L7.68059 5.59017L8.80557 9.04508L5.86034 6.90983L2.91511 9.04508L4.04008 5.59017L1.09485 3.45492H4.73536L5.86034 0Z" fill="#FF7A00" />
                      <path d="M20.8935 0L22.0185 3.45492H25.659L22.7138 5.59017L23.8388 9.04508L20.8935 6.90983L17.9483 9.04508L19.0733 5.59017L16.1281 3.45492H19.7686L20.8935 0Z" fill="#FF7A00" />
                      <path d="M35.9248 0L37.0498 3.45492H40.6903L37.745 5.59017L38.87 9.04508L35.9248 6.90983L32.9796 9.04508L34.1045 5.59017L31.1593 3.45492H34.7998L35.9248 0Z" fill="#FF7A00" />
                      <path d="M50.956 0L52.081 3.45492H55.7215L52.7763 5.59017L53.9013 9.04508L50.956 6.90983L48.0108 9.04508L49.1358 5.59017L46.1906 3.45492H49.8311L50.956 0Z" fill="#FF7A00" />
                      <path d="M65.9892 0.80745L66.8765 3.53232L66.9327 3.70492H67.1142H69.984L67.6628 5.38777L67.5154 5.49456L67.5718 5.66757L68.4587 8.39136L66.136 6.70743L65.9892 6.60104L65.8425 6.70743L63.5198 8.39136L64.4067 5.66757L64.463 5.49456L64.3157 5.38777L61.9945 3.70492H64.8643H65.0458L65.102 3.53232L65.9892 0.80745Z" stroke="black" stroke-width="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='mt-2'>
                <p className='font-12  poppins mb-0 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...</p>
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
      </div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <img src={window} className='w-100 ' alt="" />
            </div>
            <div className="text-center border-0 mb-3">
              <button type="button" className="btn-purppls px-3 py-2">Change Item</button>
              
              <button type="button" className="btn-purppls px-3 py-2">Change Photo</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetailspage