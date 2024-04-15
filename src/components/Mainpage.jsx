import React from 'react'
import Profile from '../pages/Profile'
import Project from '../pages/Project'
import Contactus from '../pages/Contactus'

import { Link } from 'react-scroll'



function Mainpage() {

  const handleDownloadResume = () => {
    // Replace 'resume.pdf' with the actual path to your resume file
    const resumeUrl = process.env.PUBLIC_URL + '/Resume002.pdf'
    // Triggering the download
    window.open(resumeUrl, '_blank');
  };

  return (
    <>
      <div className='container-fluid main-page-bg'>

        <div className='row'>
          <div className='col-md-6  '>

            <div className='my-md-5 mx-md-5 py-5' data-aos="fade-right">
              <div className='headline'>
                <p className='headling pt-3 headline-text'>I am Full stack developer</p>
              </div>
              {/* Add a span for the typing animation */}
              <p className=''>
                <span className="typing-animation">Explore, inspire, and embark on a journey through my portfolio, where imagination meets excellence.</span>
              </p>

              <div className=''>
                <button className='btn me-2 get-intouch-button'

                ><Link spy={true}
                  smooth={true}
                  offset={-70}
                  duration={300}
                  to='contactus'
                >Get in touch</Link></button>
                <button className='btn btn-success border resumebtn' ><a href='https://1drv.ms/b/s!Ai2bP9W_4bGfg9UWYsRhKfrySkuXQg?e=VxVL5g'>Download CV/Resume</a></button>
                <br>
                </br>
                <div className="social-icons mt-3">
                  <a className='icon' href='https://www.linkedin.com/in/sudhir-singh-8253a725a/'><i className="bi-linkedin "></i></a>
                  <a className='icon' href='https://github.com/sudhir25464'>  <i className="bi bi-github "></i></a>
                  <a className='icon' href='https://www.instagram.com/czy_developer?igsh=cmZwa3Fqa2d5aG1j'><i className="bi-instagram "></i></a>
                  <a className='icon' href=''><i className="bi-facebook icon"></i></a>


                </div>
              </div>

            </div>


          </div>

          <div className='col-md-6 '>
            <div className='bg-dark my-5 py-2 image-style' data-aos="fade-up">
              <img className='img-fluid' height="300px" src='https://res.cloudinary.com/dmcytmsit/image/upload/v1711714652/Design_1_sobqcf.png'></img>
            </div>
          </div>
        </div>
        {/* About section */}
        <div className='row  py-5 mb-4'>
          {/* <div className='col-md-5 order-2 order-md-1'>
        <div className='about-img'>
          <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1711692960/New_Profile_Picture_Design_wucpxq.png'></img>
        </div>
      </div> */}

          <div className='col-md-3 order-1 order-md-1 '>
            <div className='about-section-style  mb-4 ' data-aos="fade-right">
              <h6 className='fs-2'><i class="bi bi-emoji-heart-eyes"></i>About</h6>
              <p className=' p-2 '>I'm Sudhir Singh a passionate  developer currently navigating the exciting landscape of MEAN Stack technologies. 💡 Proficient in JAVASCRIPT, React.js, Node.js, Express.js, and MongoDB, I thrive on creating seamless applications that blend innovation and efficiency.

              </p>
            </div>


          </div>

          <div className='col-md-3 order-2 order-md-2' id='about' >
            <div className='text-center circle-icon'><i class="bi bi-box-seam-fill bg-dark"></i><div>hiihhhggh</div></div>
            <div className='bg-light card-body-style p-2' data-aos="fade-up">
              <div>
                <h6 className=' fs-2 px-2'><i class="bi bi-code-slash me-2"></i>Fronted</h6>
                <ul>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React Js</li>
                  <li>BootStrap</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>


            </div>

          </div>


          <div className='col-md-3 order-2 order-md-2' >
            <div className='bg-light card-body-style p-2' data-aos="fade-up">

              <h6 className='fs-2 px-2'><i class="bi bi-box-seam me-2"></i>Backend</h6>

              <ul>
                <li>Node js</li>
                <li>Express js</li>
                <li>Mysql Database</li>
                <li>SQL</li>
                <li>MongoDB</li>
              </ul>
            </div>

          </div>
          <div className='col-md-3 order-2 order-md-2' >
            <div className='bg-light card-body-style p-2' data-aos="fade-up">
              <h6 className='fs-2 px-2'><i class="bi bi-columns-gap me-2"></i>Other</h6>
              <ul>
                <li>Computer Fundamental</li>
                <li>C/C++</li>
                <li>JAVA</li>
                <li>DBMS</li>
                <li>Android (React-Native)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='row'>


        </div>
        {/* Import project section here  project-section-bg*/}

        <div className='row  mb-4 ' id='project'>
          <p className='text-center project-tag pt-4 p-2 mb-4 fs-2 text-primary fw-bold headline-text' >PROJECTS</p>
          <Project />

        </div>

        <Contactus />
        {/* <Service/> */}
      </div >
    </>
  )
}

export default Mainpage
