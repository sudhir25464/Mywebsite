import React from 'react'

function Profile() {
  return (
   <>
   <div className=''>
    <div className='d-flex justify-content-center'>
        <div className='img mt-4'>
            <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1711638734/WhatsApp_Image_2024-03-28_at_20.39.42_e2141c95_pz0piu.jpg'></img>
        </div>
    </div>
    <div className='profile-body d-flex justify-content-center'>
    <div className='profile-inner-cont px-3 '>
        <h6 className='px-4 g-font-mid py-2 text-center'>sudhir kumar</h6>
        <p>sudhir202118@gmail.com</p>
       <p>+91-7079538203</p>
       <p>sudhir singh</p>
       <p>Conatct</p>
     
    </div>
    </div>
   </div>
   </>
  )
}

export default Profile
