import React from 'react'
import ProjectSlider from './ProjectSlider'
import SecondSlider from './SecondSlider'
function Project() {
  return (
    <>
      <div className='col-md-12 mb-5'>


        <div className='scroll-skills-image mb-5'>
          <div class="wrapper">
            <div class="track">
              <div class="logo">
                <img src="https://res.cloudinary.com/dmcytmsit/image/upload/v1711890255/download_1_xgjobd.jpg" />
              </div>
              <div class="logo">
                <img src="https://res.cloudinary.com/dmcytmsit/image/upload/v1711890255/download_pzoulp.png" />
              </div>
              <div class="logo">
                <img src="https://res.cloudinary.com/dmcytmsit/image/upload/v1711890255/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail_qnzs7w.png" />
              </div>
              <div class="logo">
                <img src="https://res.cloudinary.com/dmcytmsit/image/upload/v1711890255/download_1_o0yolf.png" />
              </div>
              <div class="logo">
                <img src="https://res.cloudinary.com/dmcytmsit/image/upload/v1711890255/png-clipart-bootstrap-logo-thumbnail-tech-companies_g1ct16.png" />
              </div>
              <div class="logo me-4">
                <img src="https://res.cloudinary.com/dmcytmsit/image/upload/v1711890255/download_4_ru2sk0.png" />
              </div>
              <div class="logo me-4">
                <img src="https://res.cloudinary.com/dmcytmsit/image/upload/v1711890255/download_2_l0cfpg.png" />
              </div>
              <div class="logo me-4">
                <img src="https://res.cloudinary.com/dmcytmsit/image/upload/v1711890255/download_3_h3blxe.png" />
              </div>



              <div class="logo me-4">
                <img src=" https://res.cloudinary.com/dmcytmsit/image/upload/v1711890254/download_2_h6exzj.jpg" />
              </div>
              <div class="logo me-4">
                <img src="https://res.cloudinary.com/dmcytmsit/image/upload/v1711890255/download_3_twtvo9.jpg" />
              </div>
              <div class="logo me-4">
                <img src="https://res.cloudinary.com/dmcytmsit/image/upload/v1711890254/download_5_copc1j.png" />
              </div>
            </div>
          </div>

        </div>

        <div className='iframe-conatiner p-md-3 mb-4'>
          <div className='headline'>
            <p className='mb-5 fs-1 fw-bold g-font-bold text-success headline-text'>Demo of project</p>
          </div>
          <p>Try Our Web-Based Code Editor with Autocomplete Feature for Efficient Coding! <a href='https://codeeditorv2forus.vercel.app/'>Click Here</a></p>

          <iframe src='https://codeeditorv2forus.vercel.app/'>

          </iframe>

        </div>
        <div className='row mb-4 mt-5'>
          <div className='col-md-6'>
            <div className='project-inner-cont mb-3' data-aos="fade-up">
              <div className=''>
                <ProjectSlider />
                {/* <img className='img-fluid' src='https://res.cloudinary.com/dmcytmsit/image/upload/v1711721632/Screenshot_69_zs8vc7.png'></img>
              */}
              </div>

            </div>

          </div>

          <div className='col-md-6'>
            <div className='project-inner-cont' data-aos="fade-up">
              <div>

                <SecondSlider/>
              </div>
              <div>
                <p></p>
              </div>
            </div>

          </div>

        </div>
        <div className='text-center'><button className='btn get-project-btn mb-3 px-5 color-light py-3'><a href='https://github.com/sudhir25464'>Get All Projects</a></button></div>


      </div>

    </>
  )
}

export default Project
