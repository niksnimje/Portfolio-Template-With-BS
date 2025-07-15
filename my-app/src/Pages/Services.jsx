import React, { useEffect } from 'react'
import './Service.css'
import AOS from 'aos';

function Services() {
   useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
  return (
    <>
         <div className="container main-box back-1 text-white mt-5 ">
               <div className='text-center'>
                 <p className=' ' style={{color:"var(--text-muted)"}}>
                    Services
                </p>

                <h2 className='  text-white' style={{fontSize:"50px",lineHeight:"60px"}}>Quality Services</h2>
               </div>
                
                <div className="row flex flex-wrap gap-5 gap-lg-0 justify-content-center justify-content-lg-evenly">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-3 service_box" data-aos="fade-up" >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#9f9f9f"  ><path d="M2.04932 12.9999H7.52725C7.70624 16.2688 8.7574 19.3053 10.452 21.8809C5.98761 21.1871 2.5001 17.5402 2.04932 12.9999ZM2.04932 10.9999C2.5001 6.45968 5.98761 2.81276 10.452 2.11902C8.7574 4.69456 7.70624 7.73111 7.52725 10.9999H2.04932ZM21.9506 10.9999H16.4726C16.2936 7.73111 15.2425 4.69456 13.5479 2.11902C18.0123 2.81276 21.4998 6.45968 21.9506 10.9999ZM21.9506 12.9999C21.4998 17.5402 18.0123 21.1871 13.5479 21.8809C15.2425 19.3053 16.2936 16.2688 16.4726 12.9999H21.9506ZM9.53068 12.9999H14.4692C14.2976 15.7828 13.4146 18.3732 11.9999 20.5915C10.5852 18.3732 9.70229 15.7828 9.53068 12.9999ZM9.53068 10.9999C9.70229 8.21709 10.5852 5.62672 11.9999 3.40841C13.4146 5.62672 14.2976 8.21709 14.4692 10.9999H9.53068Z"></path></svg>

                    <h4 style={{margin:"20px 0px"}}>Brand Identity Design</h4>
                     <p style={{color:"#9f9f9f"}}>Bentos gives you the blocks & kits you  need to create a true website within <br /> minutes.</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-3 service_box" data-aos="fade-up" >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#9f9f9f"  ><path d="M6.93912 14.0328C6.7072 14.6563 6.51032 15.2331 6.33421 15.8155C7.29345 15.1189 8.43544 14.6767 9.75193 14.5121C12.2652 14.198 14.4976 12.5385 15.6279 10.4537L14.1721 8.99888L15.5848 7.58417C15.9185 7.25004 16.2521 6.91614 16.5858 6.58248C17.0151 6.15312 17.5 5.35849 18.0129 4.2149C12.4197 5.08182 8.99484 8.50647 6.93912 14.0328ZM17 8.99739L18 9.99669C17 12.9967 14 15.9967 10 16.4967C7.33146 16.8303 5.66421 18.6636 4.99824 21.9967H3C4 15.9967 6 1.99669 21 1.99669C20.0009 4.99402 19.0018 6.99313 18.0027 7.99402C17.6662 8.33049 17.3331 8.66382 17 8.99739Z"></path></svg>

                    <h4 style={{margin:"20px 0px"}}>Website Design
</h4>
                     <p style={{color:"#9f9f9f"}}>Bentos gives you the blocks & kits you  need to create a true website within <br /> minutes.</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-3 service_box" data-aos="fade-up" >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#9f9f9f"  ><path d="M4.00021 18.9223L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L4.00021 12.3671V18.9223ZM8.85987 21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V13.9221L8.85987 21ZM6.02202 5.96771L15.2939 2.22164C15.8059 2.01475 16.3888 2.26215 16.5956 2.77422L22.2147 16.682C22.4216 17.194 22.1742 17.7769 21.6622 17.9838L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1773L5.46944 7.2695C5.26255 6.75743 5.50995 6.1746 6.02202 5.96771ZM9.00021 9.00004C9.55249 9.00004 10.0002 8.55233 10.0002 8.00004C10.0002 7.44776 9.55249 7.00004 9.00021 7.00004C8.44792 7.00004 8.00021 7.44776 8.00021 8.00004C8.00021 8.55233 8.44792 9.00004 9.00021 9.00004Z"></path></svg>

                    <h4 style={{margin:"20px 0px"}}>Application Design
</h4>
                    <p style={{color:"#9f9f9f"}}>Bentos gives you the blocks & kits you  need to create a true website within <br /> minutes.</p>
                  </div>
                </div>
        </div>

        {/* Pricing */}

          <div className="container  back-1 text-white mt-5 p-2 p-sm-2 pt-lg-5" style={{padding:"80px 200px "}}>
              <div className='text-center'>
                   <p className=' ' style={{color:"var(--text-muted)"}} data-aos="fade-up" >
                    Pricing
                </p>
                <h2 className='  text-white' style={{fontSize:"50px",lineHeight:"60px"}} data-aos="fade-up" >Flexible Pricing Plan</h2>
              </div>

                <div className="row flex flex-wrap gap-5 gap-lg-0 justify-content-center justify-content-lg-evenly">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-3 pricing_box" data-aos="fade-up" >
                    <div className='pricing_in_box'>
                      <h4 style={{margin:"20px 0px"}}>Basic</h4>
                     <p style={{color:"#9f9f9f"}}>Have design ready to build?
or small budget</p>
                     <span className='price'>
                      15
                     </span>
                    </div>

                    <ul className=' list-unstyled'>
                      <li className='mb-2'>
                        <i className='pe-2'>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#77777d"  ><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </i>
                        <span className='tex'>Need your wireframe</span>
                      </li>
                      <li className='mb-2'>
                        <i className='pe-2'>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#77777d"  ><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </i>
                        <span className='tex'>Design with Figma, Framer</span>
                      </li>
                      <li className='mb-2'>
                        <i className='pe-2'>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#77777d"  ><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </i>
                        <span className='tex'>Product Design</span>
                      </li >
                      <li className='mb-2'>
                        <i className='pe-2'>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#77777d"  ><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </i>
                        <span className='tex'>Digital Marketing</span>
                      </li>
                      <li className='mb-2'>
                        <i className='pe-2'>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#77777d"  ><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </i>
                        <span className='tex'>Custom Support</span>
                      </li>
                    </ul>
                     <div className='  mt-3'>
                                        <button className='cv_btn'>Order Now
                                            <span className='  ps-2'> 
                                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  ><path d="M12.0049 2C15.3186 2 18.0049 4.68629 18.0049 8V9H22.0049V11H20.8379L20.0813 20.083C20.0381 20.6013 19.6048 21 19.0847 21H4.92502C4.40493 21 3.97166 20.6013 3.92847 20.083L3.17088 11H2.00488V9H6.00488V8C6.00488 4.68629 8.69117 2 12.0049 2ZM18.8309 11H5.17788L5.84488 19H18.1639L18.8309 11ZM13.0049 13V17H11.0049V13H13.0049ZM9.00488 13V17H7.00488V13H9.00488ZM17.0049 13V17H15.0049V13H17.0049ZM12.0049 4C9.86269 4 8.1138 5.68397 8.00978 7.80036L8.00488 8V9H16.0049V8C16.0049 5.8578 14.3209 4.10892 12.2045 4.0049L12.0049 4Z"></path></svg>
                                            </span>
                                        </button>
                                    </div>

                  </div>

                  <div className="col-12 col-sm-12 col-md-6 col-lg-3 pricing_box" data-aos="fade-up" >
                    <div className='pricing_in_box'>
                      <h4 style={{margin:"20px 0px"}}>Standard</h4>
                     <p style={{color:"var(--text-muted)"}}>Not have any design?
                      Leave ewds its for me</p>
                     <span className='price'>
                      59
                     </span>
                    </div>

                    <ul className=' list-unstyled'>
                      <li className='mb-2'>
                        <i className='pe-2'>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#77777d"  ><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </i>
                        <span className='tex'>Website Design</span>
                      </li>
                      <li className='mb-2'>
                        <i className='pe-2'>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#77777d"  ><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </i>
                        <span className='tex'>Mobile Apps Design</span>
                      </li>
                      <li className='mb-2'>
                        <i className='pe-2'>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#77777d"  ><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </i>
                        <span className='tex'>Product Design</span>
                      </li >
                      <li className='mb-2'>
                        <i className='pe-2'>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#77777d"  ><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </i>
                        <span className='tex'>Digital Marketing</span>
                      </li>
                      <li className='mb-2'>
                        <i className='pe-2'>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#77777d"  ><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </i>
                        <span className='tex'>Custom Support</span>
                      </li>
                    </ul>
                     <div className='  mt-3'>
                                        <button className='cv_btn'>Order Now
                                            <span className='  ps-2'> 
                                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  ><path d="M12.0049 2C15.3186 2 18.0049 4.68629 18.0049 8V9H22.0049V11H20.8379L20.0813 20.083C20.0381 20.6013 19.6048 21 19.0847 21H4.92502C4.40493 21 3.97166 20.6013 3.92847 20.083L3.17088 11H2.00488V9H6.00488V8C6.00488 4.68629 8.69117 2 12.0049 2ZM18.8309 11H5.17788L5.84488 19H18.1639L18.8309 11ZM13.0049 13V17H11.0049V13H13.0049ZM9.00488 13V17H7.00488V13H9.00488ZM17.0049 13V17H15.0049V13H17.0049ZM12.0049 4C9.86269 4 8.1138 5.68397 8.00978 7.80036L8.00488 8V9H16.0049V8C16.0049 5.8578 14.3209 4.10892 12.2045 4.0049L12.0049 4Z"></path></svg>
                                            </span>
                                        </button>
                                    </div>

                  </div>

                  <div className="col-12 col-sm-12 col-md-6 col-lg-3 pricing_box" data-aos="fade-up" >
                    <div className='pricing_in_box'>
                      <h4 style={{margin:"20px 0px"}}>Gold</h4>
                     <p style={{color:"var(--text-muted)"}}>Have design ready to build?
or small budget

</p>
                    <span className='price'>
                      100
                    </span>
                    </div>

                    <ul className=' list-unstyled'>
                      <li className='mb-2'>
                        <i className='pe-2'>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#77777d"  ><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </i>
                        <span className='tex'>Need your wireframe</span>
                      </li>
                      <li className='mb-2'>
                        <i className='pe-2'>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#77777d"  ><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </i>
                        <span className='tex'>Design with Figma, Framer</span>
                      </li>
                      <li className='mb-2'>
                        <i className='pe-2'>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#77777d"  ><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </i>
                        <span className='tex'>Product Design</span>
                      </li >
                      <li className='mb-2'>
                        <i className='pe-2'>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#77777d"  ><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </i>
                        <span className='tex'>Digital Marketing</span>
                      </li>
                      <li className='mb-2'>
                        <i className='pe-2'>
                          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#77777d"  ><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                        </i>
                        <span className='tex'>Custom Support</span>
                      </li>
                    </ul>
                     <div className='  mt-3'>
                                        <button className='cv_btn'>Order Now
                                            <span className='  ps-2'> 
                                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  ><path d="M12.0049 2C15.3186 2 18.0049 4.68629 18.0049 8V9H22.0049V11H20.8379L20.0813 20.083C20.0381 20.6013 19.6048 21 19.0847 21H4.92502C4.40493 21 3.97166 20.6013 3.92847 20.083L3.17088 11H2.00488V9H6.00488V8C6.00488 4.68629 8.69117 2 12.0049 2ZM18.8309 11H5.17788L5.84488 19H18.1639L18.8309 11ZM13.0049 13V17H11.0049V13H13.0049ZM9.00488 13V17H7.00488V13H9.00488ZM17.0049 13V17H15.0049V13H17.0049ZM12.0049 4C9.86269 4 8.1138 5.68397 8.00978 7.80036L8.00488 8V9H16.0049V8C16.0049 5.8578 14.3209 4.10892 12.2045 4.0049L12.0049 4Z"></path></svg>
                                            </span>
                                        </button>
                                    </div>

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

export default Services