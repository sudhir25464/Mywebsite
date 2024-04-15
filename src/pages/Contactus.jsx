import React from 'react'

function Contactus() {

    const defaultsubmit = (e)=>{
        e.preventDefault();
    }
    return (

        <>
            <div className='row contactus-bg '>
            <address>
                        <div className='mt-3'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.690809802232!2d85.112876473965!3d25.615188514646423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5828b506080f%3A0xfc77d50513e2f25c!2sBoring%20Rd%2C%20Sri%20Krishna%20Puri%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1712132430636!5m2!1sen!2sin" width="100%" height="350"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                       </address>
                <div className='col-md-4'  id='contactus'>
                    <div className=' p-md-4 p-2 mt-5 contact-inner g-font-mid'  data-aos="fade-up">
                        <p><i class="bi bi-telephone"></i> +91- 7079538203</p>
                        <p><i class="bi bi-envelope"></i> sudhirkumar25464@gmail.com</p>
                        <p><i class="bi bi-geo-alt-fill"></i> PATNA-800013, Bihar</p>
                    </div>

                </div>

                <div className='col-md-8 p-4  mb-5'>
                    <div className='form-cont ' data-aos="fade-up">

                        <p className='text-center g-font-mid fs-4 fw-bold text-primary '>Message</p>
                        <form  action="https://formspree.io/f/xaygedyo" method="POST">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control shadow-none" name="full name" placeholder="Enter full name"  required/>
                                <label for="floatingInput">Full name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control shadow-none"  name='email' placeholder="Enter email" required />
                                <label for="floatingPassword">email</label>
                            </div>
                            
                            <select class="form-select mb-3 shadow-none" name='you are' size="3" aria-label="size 3 select example" required>
                                <option selected>You are --- </option>
                                <option value="student" >Student</option>
                                <option value="recruiter">recruiter</option>
                                <option value="other">Others</option>
                            </select>

                            <div class="form-floating mb-3">
                                <textarea class="form-control shadow-none" name='message' placeholder="Leave a comment here" id="floatingTextarea2" required ></textarea>
                                <label >Write message..</label>
                            </div>

                            <button type="submit" class="btn btn-primary px-md-5">Send message</button>

                        </form>
                    </div>

                       
                </div>
              
            </div>
        </>
    )
}

export default Contactus
