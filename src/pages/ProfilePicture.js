import React, { useState, useRef } from 'react'
import MyNavbar from '../components/MyNavbar'
import Account from '../assetr/signup.png'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
const ProfilePicture = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
    
        // Display the selected image
        if (selectedFile) {
          const imageUrl = URL.createObjectURL(selectedFile);
          setSelectedImage(imageUrl);
        }
      };
    return (
        <div>
            <MyNavbar />
            <div className="container pt-5 creataccount">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className='bgcolorwhite p-4'>
                            <h3>Profile Picture</h3>
                            <p>Upload your Picture</p>
                            <div className='text-center'><img style={{width:'180px',height:'180px',borderRadius:'50%'}} src={selectedImage ? selectedImage:Account} width={150} alt="" /></div>
                            <div className="row justify-content-center text-center">
                                <div className="col-lg-8 col-12">

                                    <div className="rounded-4">
                                        <div className='p-3 mt-3 py-4 rounded-4'>
                                            <div className='mulish'>
                                                <input type='file' ref={fileInputRef}
                                                    style={{ display: 'none' }}
                                                    onChange={handleFileChange} />
                                                <div className='maincard mb-5'>
                                                    <p className='mb-0 font-16 fw-bold' style={{ cursor: 'pointer' }} onClick={handleUploadClick}>+ Upload Photo</p>
                                                </div>
                                                <div className='mt-lg-5 mt-md-3 mt-3'>
                                                    <button className='btn-purppls px-3 py-2' onClick={()=>navigate('/cloths')}>Submit</button>
                                                </div>
                                            </div>
                                        </div>
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

export default ProfilePicture