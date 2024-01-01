import React from 'react'
import MyNavbar from '../components/MyNavbar'
import itman from '../assetr/boy.png'
import Footer from '../components/Footer'

const Cart = () => {
  return (
    <div>
    <MyNavbar/>
    <div className="container creataccount py-5">
    <h6>Home / Cart</h6>
    <div className="row">
    <div className="col-12 mb-5">
    <div className='p-3 bgcolorwhite'>
    <div className='d-flex align-items-center justify-content-between'>
    <p className='mb-0 font-14 poppins'>Product</p>
    <p className='mb-0 font-14 poppins ps-3'>Price</p>
    <p className='mb-0 font-14 poppins ps-3'>Quantity</p>
    <p className='mb-0 font-14 poppins'>Subtotal</p>
    </div>
    </div>
    <div className='p-3 bgcolorwhite mt-3'>
    <div className='d-flex align-items-center justify-content-between'>
    <p className='mb-0 font-14 poppins'><img src={itman} width={15} alt="" /> Item Name</p>
    <p className='mb-0 font-14 poppins me-5'>$ 000</p>
    <p className='mb-0 font-14 poppins me-5'> <div className='bgcolorwhite px-3 rounded-3 p-2'>
    1
    </div> </p>
    <p className='mb-0 font-14 poppins'>$ 000</p>
    </div>
    </div>
    <div className='p-3 bgcolorwhite mt-3'>
    <div className='d-flex align-items-center justify-content-between'>
    <p className='mb-0 font-14 poppins'><img src={itman} width={15} alt="" /> Item Name</p>
    <p className='mb-0 font-14 poppins me-5'>$ 000</p>
    <p className='mb-0 font-14 poppins me-5'> <div className='bgcolorwhite px-3 rounded-3 p-2'>
    2
    </div> </p>
    <p className='mb-0 font-14 poppins'>$ 000</p>
    </div>
    </div>
    <div className='d-flex align-items-center justify-content-between mt-3'>
    <button className='btn-Viewall px-5 py-2'> Return To Cart </button>
    <button className='btn-Viewall px-5 py-2'> Update Cart </button>
    
    </div>
    </div>
<div className="col-lg-6 col-md-6 col-12">
<div className='d-flex align-items-center justify-content-between'>
<button className='btn-Viewall px-5 py-2'> Enter Coupon Code </button>
<button className='btn-purppls px-5 py-2'> Apply Coupon </button>
</div>
</div>
<div className="col-lg-6 col-md-6 col-12">
<div className='p-4 bgcolorwhite'>
<h3>Cart Total</h3>
<div className='d-flex align-items-center justify-content-between linebottom'>
<p className='mb-0 font-14 poppins'>Subtotal:</p>
<p className='mb-0 font-14 poppins'>$ 0000</p>
</div>
<div className='d-flex align-items-center justify-content-between linebottom mt-3'>
<p className='mb-0 font-14 poppins'>Shipping:</p>
<p className='mb-0 font-14 poppins'>$ 0000</p>
</div>
<div className='d-flex align-items-center justify-content-between linebottom mt-3'>
<p className='mb-0 font-14 poppins'>Total:</p>
<p className='mb-0 font-14 poppins'>$ 0000</p>
</div>
<div className='text-center'>
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

export default Cart