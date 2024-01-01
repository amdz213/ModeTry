import React from 'react'
import MyNavbar from '../components/MyNavbar'
import Footer from '../components/Footer'

const Account = () => {
  return (
    <div>
    <MyNavbar/>
    <div className="container creataccount py-5">
    <h6>Home / My Account</h6>
    <div className="row mt-5">
    <div className="col-l-4 col-lg-4 col-12">
    <div className='mt-3'>
    <h6>Manage My Account</h6>
    <p className='mb-0 font-14 ms-2 colorpurpple'>My Profile</p>
    <p className='mb-0 font-14 ms-2'>Address Book</p>
    <p className='mb-0 font-14 ms-2'>My Payment Options</p>
    </div>
    <div>
    <h6>My Orders</h6>
    <p className='mb-0 font-14 ms-2'>My Returns</p>
    <p className='mb-0 font-14 ms-2'>My Cancellations</p>
    </div>
    <div>
    <h6>My WishList</h6>
    </div>
    </div>
    <div className="col-l-8 col-md-8 col-12">
    <div className='text-end'>
    <h6 className='font-20 poppins colorblack'> Welcome! <span className='font-20 poppins colorpurpple '>Yousername</span></h6>
    </div>
    <div className='p-4 bgcolorwhite'>
    <h6 className='font-20 poppins colorpurpple'>Edit Your Profile</h6>
    <div className="row justify-content-between mt-3">
    <div className="col-lg-5 col-12">
    <label className='font-14 poppins colorblack'>First Name <span className='font-14 poppins colorpurpple'>*</span></label>
    <div className="mb-3 inputfiled">
  <input type="Name"  style={{backgroundColor:'transparent'}} className="form-control " id="exampleFormControlInput1" placeholder="lorem ipsum"/>
</div>
    </div>
    <div className="col-lg-5 col-12">
    <label className='font-14 poppins colorblack'>Last Name <span className='font-14 poppins colorpurpple'>*</span>  </label>
    <div className="mb-3 inputfiled">
  <input type="Name" style={{backgroundColor:'transparent'}}  className="form-control " id="exampleFormControlInput1" placeholder="lorem ipsum"/>
</div>
    </div>
    <div className="col-lg-5 col-12">
    <label className='font-14 poppins colorblack'>Email </label>
    <div className="mb-3 inputfiled">
  <input type="email"  style={{backgroundColor:'transparent'}} className="form-control " id="exampleFormControlInput1" placeholder="loremipsum@example.com"/>
</div>
    </div>
    <div className="col-lg-5 col-12">
    <label className='font-14 poppins colorblack'> Address</label>
    <div className="mb-3 inputfiled">
  <input type="email" style={{backgroundColor:'transparent'}}  className="form-control " id="exampleFormControlInput1" placeholder="loremipsumxyz"/>
</div>
    </div>
    <div className=" col-12">
    <label className='font-14 poppins colorblack'>Password Changes </label>
    <div className="mb-3 inputfiled">
  <input type="Password"  style={{backgroundColor:'transparent'}} className="form-control " id="exampleFormControlInput1" placeholder="current password"/>
</div>
    <div className="mb-3 inputfiled">
  <input type="Password"  style={{backgroundColor:'transparent'}} className="form-control " id="exampleFormControlInput1" placeholder="enter New password"/>
</div>
    <div className="mb-3 inputfiled">
  <input type="Password"  style={{backgroundColor:'transparent'}} className="form-control " id="exampleFormControlInput1" placeholder="confirm New password"/>
</div>
    </div>
    <div className='d-flex justify-content-end'>
    <button className='btn-Viewall px-3 py-2 me-2'> Cancle </button>
    <button className='btn-purppls px-4 py-2'> Save Changes </button>
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

export default Account