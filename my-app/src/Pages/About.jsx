
import { useEffect } from 'react';
import profile from '../assets/profile.png'
import './About.css'
import AOS from 'aos';


function About() {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

  return (
    <>
        <div className="container main-div">
                    <div className="row gap-5 p-1 p-sm-2 p-md-0 justify-content-md-center">
                        <div className="back-1 colum-4" >
                            <img src={profile} className='profile-img' alt="" />
                        </div>
                        <div className="colum-8">
                            <div className="row">
                                <div className="col-12 back-1 p-5">
                                    <h1 className='  text-white ' style={{fontSize:"40px"}}>I’m Bentos Walker, a product designer.
                                    </h1>
                                    <p className='  tex' >I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.</p>
                                    
                                    <p className='  tex'> 
                                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                                    </p>
                                    <div className='  mt-3'>
                                        <button className='cv_btn'>Get in touch
                                            <span className='  ps-2'> 
                                                <svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" ><path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path></svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>

         <div className="container">
                    <div className="row justify-content-center gap-5 p-1 p-sm-2 p-md-0 mt-5">
                        <div className="back-1 colum-6" >
                            <div className="row">
                                <div className="col-12 back-1 p-1 p-sm-2 p-md-5">
                                    <h1 className='  text-white ' style={{fontSize:"40px"}}>
                                    </h1>
                                    <h4 className='text-white' data-aos="fade-up" >Experience</h4>
                                    <div className='d-flex gap-4 mt-5' data-aos="fade-up">
                                        <div className='E-icon '>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#eb5d3a" className="remixicon E-ico"><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path></svg>
                                    </div>
                                     <div className=''>
                                            <p className='fo_16'>2021 - Present</p>
                                            <p className='fo_20'>Web Designer</p>
                                            <p className='fo_16'>Themeforest Market</p>
                                        </div>
                                    </div>
                                    <hr className='hr_line' />

                                    <div className='d-flex gap-4 mt-4' data-aos="fade-up">
                                        <div className='E-icon '>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#eb5d3a" className="remixicon E-ico"><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path></svg>
                                    </div>
                                     <div className=''>
                                            <p className='fo_16'>2021 - 2023</p>
                                            <p className='fo_20'>Marketing Expert GRP</p>
                                            <p className='fo_16'>Envato Theme Developer</p>
                                        </div>
                                    </div>
                                    <hr className='hr_line' />

                                    <div className='d-flex gap-4 mt-4' data-aos="fade-up">
                                        <div className='E-icon '>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#eb5d3a" className="remixicon E-ico"><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path></svg>
                                    </div>
                                     <div className=''>
                                            <p className='fo_16'>2021 - 2022</p>
                                            <p className='fo_20'>Web Designer</p>
                                            <p className='fo_16'>Web Developer & Business</p>
                                        </div>
                                    </div>
                                    <hr className='hr_line' />
                                </div>
                            </div>
                        </div>
                        <div className="back-1 colum-6" >
                            <div className="row ">
                                <div className="col-12 back-1 p-1 p-sm-2 p-md-5 ">
                                    <h1 className='  text-white ' style={{fontSize:"40px"}}>
                                    </h1>
                                    <h4 className='text-white' data-aos="fade-up">Education</h4>
                                    <div className='d-flex gap-4 mt-5' data-aos="fade-up">
                                        <div className='E-icon '>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#eb5d3a" className="remixicon E-ico"><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path></svg>
                                    </div>
                                     <div className=''>
                                            <p className='fo_16'>2013 - 2015</p>
                                            <p className='fo_20'>Bachelor Degree of Information </p>
                                            <p className='fo_16'>State University   </p>
                                        </div>
                                    </div>
                                    <hr className='hr_line' />

                                    <div className='d-flex gap-4 mt-4' data-aos="fade-up">
                                        <div className='E-icon '>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#eb5d3a" className="remixicon E-ico"><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path></svg>
                                    </div>
                                     <div className=''>
                                            <p className='fo_16'>2021 - 2024</p>
                                            <p className='fo_20'>Higher secoundery Education</p>
                                            <p className='fo_16'>Envato Theme Developer</p>
                                        </div>
                                    </div>
                                    <hr className='hr_line' />

                                    <div className='d-flex gap-4 mt-4' data-aos="fade-up">
                                        <div className='E-icon '>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#eb5d3a" className="remixicon E-ico"><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path></svg>
                                    </div>
                                     <div className=''>
                                            <p className='fo_16'>2020 - 2021</p>
                                            <p className='fo_20'>UI/UX Design</p>
                                            <p className='fo_16'>Web Developer & Business Partner</p>
                                        </div>
                                    </div>
                                    <hr className='hr_line' />
                                </div>
                            </div>
                        </div>
                    </div>
        </div>


        {/* testimonial */}

         <div className="container text-center back-1 text-white mt-5 p-2 p-sm-2 pt-lg-5" style={{padding:"80px 200px "}}>
                <p  style={{color:"var(--text-muted)"}} data-aos="fade-up">
                    Testinomials
                </p>

                <h2 className='  text-white' style={{fontSize:"40px",lineHeight:"50px"}} data-aos="fade-up">What clients say!</h2>
                
        </div>


        <div className="container text-center back-1 text-white mt-5 p-2 p-sm-2 pt-lg-5" style={{padding:"80px 200px "}}>
            
                <h2 className='  text-white' style={{fontSize:"40px",lineHeight:"50px"}} data-aos="fade-up">Are You Ready to kickstart your project with <br /> a touch of magic?</h2>
                <p className=' ' style={{color:"var(--text-muted)"}} data-aos="fade-up">
                    Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push the <br /> boundaries of design and deliver exceptional work.
                </p>
                <button className='cv_btn' data-aos="fade-up">Let's Talk
                    <span className='  ps-2'>
                        <svg style={{backgroundColor:"transparent"}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"  ><path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"></path>
                        </svg>
                    </span>
                </button>
        </div>


    <div className='container d-flex justify-content-between' style={{color:"var(--text-muted)"}} data-aos="fade-up">
            <p data-aos="fade-up">Copyright @2025, <span style={{color:"var(--primary-color)"}}>Bentos</span> All Rights Reserved.</p>
            <p data-aos="fade-up">Crafted with ❤️ theme_ocean</p>
        </div>

    </>
  )
}

export default About