import React from 'react'
import MyNavbar from '../components/MyNavbar'
import Account from '../assetr/signup.png'
import Footer from '../components/Footer'
import { IoMdCheckmark } from "react-icons/io";
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div>
      <MyNavbar />
      <div className="container pt-5 creataccount">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <div className='bgcolorwhite p-lg-4 p-md-2 p-2'>
              <h3>Login Account  </h3>
              <p>Enter Your Details Below</p>
              <div className='text-center'><img src={Account} width={100} alt="" /></div>
              <div className="row justify-content-center">
                <div className="col-lg-10 col-12">
                  <div className='p-3'>

                    <div className=' '>
                      <label htmlFor="">Username</label>
                      <div class="input-group  Usernamebordebottem mb-3">
                        <input type="text" className="form-control p-0 border-0" style={{ backgroundColor: 'transparent' }} placeholder="lorem ipsum" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span class="input-group-text border-0" style={{ backgroundColor: 'transparent' }} id="basic-addon2"><IoMdCheckmark size={20} color='#2240A4' />
                        </span>
                      </div>
                    </div>
                    <div className=''>
                      <label htmlFor="">Email Address</label>
                      <div class="input-group  Usernamebordebottem mb-3">
                        <input type="text" className="form-control p-0 border-0" style={{ backgroundColor: 'transparent' }} placeholder="loremipsum@example.com" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span class="input-group-text border-0" style={{ backgroundColor: 'transparent' }} id="basic-addon2"><IoMdCheckmark size={20} color='#2240A4' />
                        </span>
                      </div>
                    </div>
                    <div className=''>
                      <label htmlFor="">Password</label>
                      <div class="input-group  Usernamebordebottem mb-3">
                        <input type="text" className="form-control p-0 border-0" style={{ backgroundColor: 'transparent' }} placeholder="Loremipsum@000" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span class="input-group-text border-0" style={{ backgroundColor: 'transparent' }} id="basic-addon2"><IoMdCheckmark size={20} color='#2240A4' />
                        </span>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                      <h6>Remember me</h6>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                      </div>
                    </div>
                  </div>
                  <div className='text-center'>
                    <button className='btn-purppls px-4 py-2 '> Login </button>
                    <h6 className='mt-3'>Forgot password?</h6>
                  </div>
                  <div className='text-center mt-5'>
                    <h6 className='mt-3'>No have any account? <Link to='/' className='text-decoration-underline '>Signup</Link> </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login