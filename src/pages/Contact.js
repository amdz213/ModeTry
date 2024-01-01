import React from 'react'
import MyNavbar from '../components/MyNavbar'
import phone from '../assetr/mobil.png'
import mail from '../assetr/email.png'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <div>
            <MyNavbar />
            <div className="container creataccount py-lg-5 py-md-3 py-3">
                <h6>Home / Contact</h6>
                <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                    <div className='p-4 bgcolorwhite'>
                        <div className='Usernamebordebottem'>
                            <div className='d-flex align-items-center mb-2'>
                                <div><img src={phone} width={30} alt="" /></div>
                                <h6 className='ms-2'>Call To Us</h6>
                            </div>
                            <p className='mb-0 font-14 poppins'>We are available Lorem ipsum
                                dolor sit amet, consectetur...</p>
                            <p className='mb-0 font-14 poppins mt-2'>Phone:<span> +00000-00000-0000 </span></p>
                        </div>
                        <div className='mt-2'>
                            <div className='d-flex align-items-center mb-2'>
                                <div><img src={mail} width={30} alt="" /></div>
                                <h6 className='ms-2'>Write To Us</h6>
                            </div>
                            <p className='mb-0 font-14 poppins'>Fill out our form and we will contact
                                you within 24 hours.</p>
                            <p className='mb-0 font-14 poppins mt-2'>Email:<span>  loremIpsum@modetry.com </span></p>
                            <p className='mb-0 font-14 poppins mt-2'>Email:<span>  another@modetry.com </span></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-12 mt-lg-0 mt-md-0 mt-3 align-self-center">
                    <div className='p-4 bgcolorwhite'>
                        <form className="row mt-2">
                            <div className="col-lg-4 col-12">
                                <div className="mb-3 inputfiled">
                                    <input type="Name" style={{ backgroundColor: 'transparent' }} className="form-control " id="exampleFormControlInput1" placeholder="Your Name*" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="mb-3 inputfiled">
                                    <input type="Name" style={{ backgroundColor: 'transparent' }} className="form-control " id="exampleFormControlInput1" placeholder="Your email*" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="mb-3 inputfiled">
                                    <input type="Name" style={{ backgroundColor: 'transparent' }} className="form-control " id="exampleFormControlInput1" placeholder="Your phone* " />
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div class="mb-3 inputfiled">
                                    <textarea className="form-control" placeholder='Your Message' style={{ backgroundColor: 'transparent' }} id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end mt-3'>
                                <button className='btn-purppls px-4 py-2' type='submit'> Save Changes </button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact