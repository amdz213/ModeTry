import React from 'react'
import MyNavbar from '../components/MyNavbar'
import forgot from '../assetr/forgot.png'
import Footer from '../components/Footer'
import { IoMdCheckmark } from "react-icons/io";
const ForgotPassword = () => {
  return (
    <div>
    <MyNavbar/>
    <div className="container pt-5 creataccount">
    <div className="row justify-content-center">
    <div className="col-lg-6 col-12">
    <h3>Forgot Password  </h3>
    <p>Enter Your Details Below</p>
    <div className='text-center'><img src={forgot} width={100} alt="" /></div>
    <div className=''>
   <label htmlFor="">Email Address</label>
   <div class="input-group  Usernamebordebottem mb-3">
  <input type="text" className="form-control p-0 border-0" style={{ backgroundColor: 'transparent' }}  placeholder="loremipsum@example.com" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text border-0" style={{ backgroundColor: 'transparent' }}   id="basic-addon2"><IoMdCheckmark size={20} color='#2240A4' />
  </span>
</div>
    </div>
    </div>
    <div className='text-center'>
    <button className='btn-purppls px-4 py-2 mb-5'> Confirm Mail </button>
    <p className='mb-0 mt-5'>Please write your email to receive a confirmation code to set a new password.</p>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default ForgotPassword