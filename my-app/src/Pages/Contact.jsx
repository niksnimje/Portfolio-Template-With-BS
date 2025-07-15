import React, { useEffect } from 'react'
import "./Contact.css"
import AOS from 'aos';


function Contact() {
   useEffect(() => {
          AOS.init({ duration: 1000, once: true });
        }, []);

  return (
    <>

    <div className="container contact-main back-1 text-white mt-5 " >
               <div className='text-center'>
                 <p className=' ' style={{color:"var(--text-muted)"}}>
                    contact
                </p>
                <h2 className='  text-white' style={{fontSize:"50px",lineHeight:"60px"}}>Get in Touch with Me!</h2>
               </div>

            <div className="row justify-content-center gap-5" data-aos="fade-up" >
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 contact-box ms-0 ms-sm-0 ms-md-4">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#eb5d3a"  ><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg>
                  <h5>our office:</h5>
                  <p className='tex'>Jurain,Dhaka Bangladesh</p>
                  <br />
                  <i>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#eb5d3a"  ><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg>
                  </i>
                  <h5>contact number:</h5>
                  <p className='tex'>+1234321321</p>
                  <br />
                  <i><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#eb5d3a"  ><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg></i>
                   <h5>Email us:</h5>
                  <p className='tex'>websitename@mail.com</p>
              </div>
              <div className="col-12 col-sm-12 col-md-7 col-lg-7 contact-box">
                <div className='row'>
                  <div className='col-12 col-sm-12 col-md-6 col-lg-6 mt-3'>
                    <p className='tex'>Full Name</p>
                    <input type="text" className='form_data' name="name" />
                  </div>
                  <div className='col-12 col-sm-12 col-md-6 col-lg-6 mt-3'>
                    <p className='tex'>Email Address</p>
                    <input type="text" className='form_data' name="name" />
                  </div>
                </div>
                <div>
                  <p className='tex mt-4'>Your Message</p>
                  <textarea name="message" id="message" className="form-control" rows="4" required="" data-error="Please Write your Message"></textarea>
                </div>
                 <button className='cv_btn mt-4'>Send Me Message
                    <span className='  ps-2'>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"  ><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                    </span>
                </button>
              </div>
            </div>

        </div>

        {/* Footer */}
        <div className="container text-center back-1 text-white mt-5 p-2 p-sm-2 pt-lg-5" style={{padding:"80px 200px "}}>
            
                <h2 className='text-white' style={{fontSize:"40px",lineHeight:"50px"}} data-aos="fade-up" >Are You Ready to kickstart your project with <br /> a touch of magic?</h2>
                <p style={{color:"var(--text-muted)"}} data-aos="fade-up" >
                    Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push the <br /> boundaries of design and deliver exceptional work.
                </p>
                <button className='cv_btn' data-aos="fade-up" >Let's Talk
                    <span className='  ps-2' data-aos="fade-up" >
                        <svg style={{backgroundColor:"transparent"}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"  ><path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"></path>
                        </svg>
                    </span>
                </button>
        </div>
        
        <div className='container d-flex justify-content-between' data-aos="fade-up"  style={{color:"var(--text-muted)"}}>
            <p data-aos="fade-up">Copyright @2025, <span style={{color:"var(--primary-color)"}} data-aos="fade-up" >Bentos</span> All Rights Reserved.</p>
            <p data-aos="fade-up" >Crafted with ❤️ theme_ocean</p>
        </div>
    </>
  )
}

export default Contact