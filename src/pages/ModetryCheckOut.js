import React from 'react'
import MyNavbar from '../components/MyNavbar'
import itman from '../assetr/boy.png'
import iconone from '../assetr/iconone.png'
import icontwo from '../assetr/icontwo.png'
import iconthree from '../assetr/iconthree.png'
import iconfor from '../assetr/iconfor.png'
import Footer from '../components/Footer'


const ModetryCheckOut = () => {
    return (
        <div>
            <MyNavbar />
            <div className="container creataccount py-5">
                <h6>Account / My Account / Product / View Cart / <span>CheckOut</span> </h6>
                <div className="row mt-5">
                    <h3 className='mb-3'>Billing Details</h3>
                    <div className="col-lg-5 col-12">
                        <div className='bgcolorwhite p-4'>

                            <div className='Usernamebordebottem mb-3'>
                                <label htmlFor="">First Name *</label>
                                <input className="form-control border-0" style={{ backgroundColor: 'transparent' }} type="text" placeholder="lorem ipsum" aria-label="default input example"></input>
                            </div>
                            <div className='Usernamebordebottem mb-3'>
                                <label htmlFor="">Company Name</label>
                                <input className="form-control border-0" style={{ backgroundColor: 'transparent' }} type="text" placeholder="loremipsum@example" aria-label="default input example"></input>
                            </div>
                            <div className='Usernamebordebottem mb-3'>
                                <label htmlFor="">Street Address *</label>
                                <input className="form-control border-0" style={{ backgroundColor: 'transparent' }} type="text" placeholder="lorem ipsum" aria-label="default input example"></input>
                            </div>
                            <div className='Usernamebordebottem mb-3'>
                                <label htmlFor="">Apartment, Floor, etc. (optional)</label>
                                <input className="form-control border-0" style={{ backgroundColor: 'transparent' }} type="text" placeholder="loremipsum" aria-label="default input example"></input>
                            </div>
                            <div className='Usernamebordebottem mb-3'>
                                <label htmlFor="">Town / City *</label>
                                <input className="form-control border-0" style={{ backgroundColor: 'transparent' }} type="text" placeholder="loremipsum" aria-label="default input example"></input>
                            </div>
                            <div className='Usernamebordebottem mb-3'>
                                <label htmlFor="">Phone Number *</label>
                                <input className="form-control border-0" style={{ backgroundColor: 'transparent' }} type="text" placeholder="lorem ipsum" aria-label="default input example"></input>
                            </div>
                            <div className='Usernamebordebottem mb-3'>
                                <label htmlFor="">Email Address *</label>
                                <input className="form-control border-0" style={{ backgroundColor: 'transparent' }} type="text" placeholder="lorem ipsum" aria-label="default input example"></input>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Save this information for faster check-out next time
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className='p-3'>
                            <div className='d-flex align-items-center justify-content-between mt-3'>
                                <p className='mb-0 font-14 poppins'><img src={itman} width={30} alt="" /> Item Name</p>
                                <p className='mb-0 font-14 poppins'>$ 000</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between mt-4'>
                                <p className='mb-0 font-14 poppins'><img src={itman} width={30} alt="" /> Item Name</p>
                                <p className='mb-0 font-14 poppins'>$ 000</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between linebottom mt-4'>
                                <p className='mb-0 font-14 poppins'>Subtotal:</p>
                                <p className='mb-0 font-14 poppins'>$ 0000</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between linebottom mt-4'>
                                <p className='mb-0 font-14 poppins'>Shipping:</p>
                                <p className='mb-0 font-14 poppins'>$ 0000</p>
                            </div>
                            <div className='d-flex align-items-center justify-content-between linebottom mt-4'>
                                <p className='mb-0 font-14 poppins'>Total:</p>
                                <p className='mb-0 font-14 poppins'>$ 0000</p>
                            </div>
                            <div className='d-flex justify-content-between  mt-4'>
                                <div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Bank
                                        </label>
                                    </div>
                                    <div class="form-check mt-3">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Cash On Delivery
                                        </label>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div>
                                        <img src={iconone} width={30} alt="" />
                                    </div>
                                    <div>
                                        <img src={icontwo} className='mx-2' width={30} alt="" />
                                    </div>
                                    <div>

                                        <img src={iconthree} className='mx-2' width={30} alt="" />
                                    </div>
                                    <div>

                                        <img src={iconfor} width={30} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-around mt-5'>
                                <button className='btn-Viewall px-5 py-2'> Enter Coupon Code </button>
                                <button className='btn-purppls px-5 py-2'> Apply Coupon </button>
                            </div>
                            <div className='text-center mt-3'>
                                <button className='btn-purppls mt-3 px-4 py-2'> Process to Checkout </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ModetryCheckOut