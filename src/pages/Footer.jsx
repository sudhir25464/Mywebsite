import React from 'react'

function Footer() {
  return (
   <>
   <div className='p-2 pt-3 footer-background '>
    <p className='icont-cont-main' >
    {/* <div className='icon-cont'><img  className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1711943868/mywebsite/message_suoelv.png'></img></div>
    <div className='icon-cont'><img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1711943868/mywebsite/message_suoelv.png'></img></div>
    <div className='icon-cont'> <img  className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1711943868/mywebsite/email_gfnywx.png'></img></div>
    <div className='icon-cont'></div> */}
    {/* <div className='icon-cont'><a href='https://www.linkedin.com/in/sudhir-singh-8253a725a/?trk=public-profile-join-page'> <i class="bi bi-linkedin"></i></a></div>
    <div className='icon-cont'><a href='https://github.com/sudhir25464'><i class="bi bi-github"></i></a></div>
    <div className='icon-cont'> <a href='https://web.whatsapp.com/ text=Your%20Predefined%20Message%20Here"'> <i class="bi bi-whatsapp"></i></a></div>
    <div className='icon-cont'><i class="bi bi-envelope"></i></div>
   
     */}
       <div className="social-icons mt-3">
                  <a className='icon' href='https://www.linkedin.com/in/sudhir-singh-8253a725a/'><i className="bi-linkedin "></i></a>
                  <a className='icon' href='https://github.com/sudhir25464'>  <i className="bi bi-github "></i></a>
                  <a className='icon' href='https://www.instagram.com/czy_developer?igsh=cmZwa3Fqa2d5aG1j'><i className="bi-instagram "></i></a>
                  <a className='icon' href=''><i className="bi-facebook icon"></i></a>


                </div>
    
    </p>
    <p className='text-light text-center g-font-mid footer-text  ' >
      {/* <i class="bi bi-envelope me-2 text-primary rounded-circle p-1 bg-light"></i> */}
       sudhir202118@gmail.com   Created by SUDHIR KUMAR</p>
   </div>
   </>
  )
}

export default Footer
