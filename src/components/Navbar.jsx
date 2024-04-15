import React from 'react'
import { Link } from 'react-scroll';
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand g-font-tag px-4" href="#">Sudhir.</a>

          <button className="navbar-toggler  shadow-none border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon "></span> */}
            <i class=" bi bi-three-dots-vertical shadow-none "></i>
          </button>
          <div className="collapse navbar-collapse me-auto " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mb-lg-0 ms-auto g-font-mid ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>


              <li className="nav-item ">
                <Link className="nav-link " to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="project"
                 spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}>Project</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to='contactus'
                 spy={true}
                 smooth={true}
                 offset={-90}
                 duration={300}>Contact</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link"  to='contactus'
                
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}>Services</Link>
              </li>

            </ul>

          </div>
          <span className='pull-right me-2 menu-contact-style me-3'> <i class="bi bi-envelope me-2"></i>sudhir202118@gmail.com</span>
          <span className='pull-right me-2 menu-contact-style'><i class="bi bi-telephone me-2"></i>+ 91-7079538203</span>

          {/* <p>  <span className='pull-right  menu-contact-style-sm '> <i class="bi bi-envelope me-2"></i>sudhir202118@gmail.com</span>
        <span className='pull-right  menu-contact-style-sm'><i class="bi bi-telephone me-2"></i>+ 91-7079538203</span>
     </p> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
