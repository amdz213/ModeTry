import React from 'react'
import MyNavbar from '../components/MyNavbar'
import forgot from '../assetr/forgot.png'
import Footer from '../components/Footer'
import { IoMdCheckmark } from "react-icons/io";
const Login = () => {
  return (
    <div>
    <MyNavbar/>
    <div className="container pt-5 creataccount">
    <div className="row justify-content-center">
    <div className="col-lg-8 col-12">
    <div className='bgcolorwhite p-lg-4 p-md-3 p-3'>
    <h3>New Password</h3>
    <p>Enter Your Details Below</p>
    <div className='text-center'><img src={forgot} width={100} alt="" /></div>
    <div className="row justify-content-center">
    <div className="col-lg-10 col-12">
    <div className='p-2'>
    
    <div className=' '>
   <label htmlFor="">Username</label>
   <div class="input-group  Usernamebordebottem mb-3">
   <input type="text" className="form-control p-0 border-0" style={{ backgroundColor: 'transparent' }}  placeholder="lorem ipsum" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
   <span class="input-group-text border-0" style={{ backgroundColor: 'transparent' }}   id="basic-addon2"><IoMdCheckmark size={20} color='#2240A4' />
   </span>
 </div>
    </div>
    <div className=''>
   <label htmlFor="">Password</label>
   <div class="input-group  Usernamebordebottem mb-3">
  <input type="text" className="form-control p-0 border-0" style={{ backgroundColor: 'transparent' }}  placeholder="Newpasswordxyz@000" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text border-0" style={{ backgroundColor: 'transparent' }}   id="basic-addon2">
  </span>
</div>
    </div>
    </div>
    <div className='text-center'>
    <button className='btn-purppls px-4 py-2 mb-3'> New Password </button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Login