import React, { useState } from 'react';
import forgot from '../assetr/forgot.png'
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
const Otp = () => {
    const [otp, setOtp] = useState('');
    const renderInput = (inputProps, index) => {
        const isFilled = otp.length > index; // Check if OTP value is present

        // Apply different background colors based on whether OTP value is present or not
        const backgroundColor = isFilled ? 'rgba(255, 255, 255, 0.30 ' : 'rgba(255, 255, 255, 0.30';
        const color = isFilled ? '#000000' : 'rgba(0, 0, 0, 1)';

        return (
            <input
                {...inputProps}
                style={{ backgroundColor, color }}
                maxLength={1} // Set max length to 1 to allow only one character
            />
        );
    };

    const navigate = useNavigate();
    return (

        <div>
        <MyNavbar/>
            <div className="container creataccount">
                <div className="row justify-content-center poppins min-100vh">
                    <div className="col-lg-8 col-md-8 col-12 d-flex flex-column justify-content-between pt-lg-5 pt-md-5 pt-3 px-0">
                        <div className="container-fluid">

                            <div className="row justify-content-center me-lg-5 me-md-5">
                                <div className="col-lg-8 col-md-8 col-12 ">
                                <div className='bgcolorwhite p-4'>
                                
                                <h3 className=''>Verification Code</h3>
                                <p className=' font-14 mb-0'>Enter Your Code Below</p>
                                <div className='text-center mt-3'>
                                <img src={forgot} width={100} alt="" />
                                </div>
                                    <div className="row mt-5">
                                        <div className='otp initian-Otp'>
                                            <OtpInput
                                                value={otp}
                                                onChange={setOtp}
                                                numInputs={4}
                                                renderSeparator={<span>&nbsp;&nbsp;</span>}
                                                renderInput={renderInput}
                                            />
                                        </div>
                                        <div className='text-center mt-3'>
                                        <p><a href=""  className='text-decoration-none '>00:20</a> resend confirmation code.</p>
                                        </div>

                                        <div className='text-center mt-3 mb-3'>
                                        <button type='button ' onClick={() => navigate('/')} className={` mt-4 ms-2 ${otp ? 'otp-btn' : 'otp-btn-border'}`}>Confirm Code</button>
                                        </div>
                                    </div>
                                </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        <Footer/>
        </div>
    );
}

export default Otp;
