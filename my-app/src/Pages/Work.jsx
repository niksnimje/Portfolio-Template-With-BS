import React, { useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react'
import AOS from 'aos';


function Work() {
    const [activeTab, setActiveTab] = useState('all');
     useEffect(() => {
            AOS.init({ duration: 1000, once: true });
          }, []);

  return (
    <>
       {/* NavTabs */}
        <div className="container  back-1   text-white">
            <div className="row  ">
                <div className="col-12   text-center">
                    <h2 className='  text-white' style={{fontSize:"50px",lineHeight:"60px"}} data-aos="fade-up">Works & Projects</h2>
                    <p data-aos="fade-up" style={{color:"#9F9F9F"}}>Check out some of my design projects, meticulously crafted with love <br /> and dedication, each one reflecting the passion and soul I poured into every <br /> detail.</p>
                </div>
 <div className='  p-5'>
      {/* Tabs */}
      <Nav variant="underline" data-aos="fade-up" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
        <Nav.Item className='  tab_link' >
          <Nav.Link eventKey="all">All</Nav.Link>
        </Nav.Item>
        <Nav.Item className='  tab_link'   >
          <Nav.Link eventKey="web-design">Design</Nav.Link>
        </Nav.Item>
        <Nav.Item className='  tab_link'  >
          <Nav.Link eventKey="game">Game</Nav.Link>
        </Nav.Item>
        <Nav.Item className='  tab_link' >
          <Nav.Link eventKey="branding">Branding</Nav.Link>
        </Nav.Item>
        <Nav.Item className='  tab_link' >
          <Nav.Link eventKey="Marketing">Marketing</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        </Nav.Item>
      </Nav>

      <div className="mt-4 " data-aos="fade-up">
        
        {activeTab === 'all' && (
          <div className=' '>
            <ul className='row list-unstyled g-4  '>
            <li className="col-12 col-md-6 col-lg-4  ">
            <div className="project-wrapper position-relative" data-aos="zoom-in" data-aos-delay="200">
                <img
                src="https://bentos-next.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fwork1.jpg&w=1920&q=75"
                alt=""
                className="img-fluid project-img"
                />
                
                <div className="hover-overlay  ">
                <div className="icon-circle  ">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className=' '>
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                </div>
                </div>
                <div className='p-4'>
                    <p className='tex mb-1'>Design</p>
                    <h5 className=' '>Mobile Application Design</h5>
                </div>
            </div>
            </li>

            <li className="col-12 col-md-6 col-lg-4  ">
            <div className="project-wrapper position-relative" data-aos="zoom-in" data-aos-delay="200">
                <img
                src="https://bentos-next.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fwork2.jpg&w=1920&q=75"
                alt=""
                className="img-fluid project-img"
                />
                
                <div className="hover-overlay  ">
                <div className="icon-circle  ">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className=' '>
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                </div>
                </div>
                <div className='p-4'>
                    <p className='tex mb-1'>Game</p>
                    <h5 className=' '>Website Makeup Design</h5>
                </div>
            </div>
            </li>

            <li className="col-12 col-md-6 col-lg-4  ">
            <div className="project-wrapper position-relative" data-aos="zoom-in" data-aos-delay="200">
                
                <img
                src="https://bentos-next.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fwork3.jpg&w=1920&q=75"
                alt=""
                className="img-fluid project-img"
                />
                
                <div className="hover-overlay  ">
                <div className="icon-circle  ">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className=' '>
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                </div>
                </div>
                <div className='p-4'>
                    <p className='tex mb-1'>Branding</p>
                    <h5 className=' '>Brand Identity and Motion Design</h5>
                </div>
            </div>
            </li>

            <li className="col-12 col-md-6 col-lg-4  ">
            <div className="project-wrapper position-relative" data-aos="zoom-in" data-aos-delay="200">
                
                <img
                src="https://bentos-next.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fwork4.jpg&w=1920&q=75"
                alt=""
                className="img-fluid project-img"
                />
                
                <div className="hover-overlay  ">
                <div className="icon-circle  ">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className=' '>
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                </div>
                </div>
                <div className='p-4'>
                    <p className='tex mb-1'>Marketing</p>
                    <h5 className=' '>Mobile Application Design</h5>
                </div>
            </div>
            </li>

            <li className="col-12 col-md-6 col-lg-4  ">
            <div className="project-wrapper position-relative" data-aos="zoom-in" data-aos-delay="200">
                
                <img
                src="https://bentos-next.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fwork3.jpg&w=1920&q=75"
                alt=""
                className="img-fluid project-img"
                />
                
                <div className="hover-overlay  ">
                <div className="icon-circle  ">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className=' '>
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                </div>
                </div>
                <div className='p-4'>
                    <p className='tex mb-1'>Design</p>
                    <h5 className=' '>Brand Identity and Motion Design</h5>
                </div>
            </div>
            </li>


            <li className="col-12 col-md-6 col-lg-4  ">
            <div className="project-wrapper position-relative" data-aos="zoom-in" data-aos-delay="200">
                
                <img
                src="https://bentos-next.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fwork4.jpg&w=1920&q=75"
                alt=""
                className="img-fluid project-img"
                />
                
                <div className="hover-overlay  ">
                <div className="icon-circle  ">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className=' '>
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                </div>
                </div>
                <div className='p-4'>
                    <p className='tex mb-1'>Marketing</p>
                    <h5 className=' '>Brand Identity and Motion Design</h5>
                </div>
            </div>
            </li>
            </ul>
          </div>
        )}

        {activeTab === 'web-design' && (
           <div className=' '>
            <ul className='row list-unstyled g-4  '>
            <li className="col-12 col-md-6 col-lg-4  ">
            <div className="project-wrapper position-relative">
                <img
                src="https://bentos-next.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fwork1.jpg&w=1920&q=75"
                alt=""
                className="img-fluid project-img"
                />
                
                <div className="hover-overlay  ">
                <div className="icon-circle  ">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className=' '>
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                </div>
                </div>
                <div className='p-4'>
                    <p className='tex mb-1'>Design</p>
                    <h5 className=' '>Mobile Application Design</h5>
                </div>
            </div>
            </li>

           <li className="col-12 col-md-6 col-lg-4  ">
            <div className="project-wrapper position-relative">
                
                <img
                src="https://bentos-next.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fwork3.jpg&w=1920&q=75"
                alt=""
                className="img-fluid project-img"
                />
                
                <div className="hover-overlay  ">
                <div className="icon-circle  ">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className=' '>
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                </div>
                </div>
                <div className='p-4'>
                    <p className='tex mb-1'>Design</p>
                    <h5 className=' '>Brand Identity and Motion Design</h5>
                </div>
            </div>
            </li>

            </ul>
          </div>
        )}

        {activeTab === 'game' && (
            <div>
                <ul className='row list-unstyled g-4  '>
                <li className="col-12 col-md-6 col-lg-4  ">
            <div className="project-wrapper position-relative">
                <img
                src="https://bentos-next.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fwork2.jpg&w=1920&q=75"
                alt=""
                className="img-fluid project-img"
                />
                
                <div className="hover-overlay  ">
                <div className="icon-circle  ">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className=' '>
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                </div>
                </div>
                <div className='p-4'>
                    <p className='tex mb-1'>Game</p>
                    <h5 className=' '>Website Makeup Design</h5>
                </div>
            </div>
            </li>
            </ul>
            </div>
        )}

        {activeTab === 'branding' && (
            <div>
                <ul className='row list-unstyled g-4  '>
               <li className="col-12 col-md-6 col-lg-4  ">
            <div className="project-wrapper position-relative">
                
                <img
                src="https://bentos-next.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fwork3.jpg&w=1920&q=75"
                alt=""
                className="img-fluid project-img"
                />
                
                <div className="hover-overlay  ">
                <div className="icon-circle  ">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className=' '>
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                </div>
                </div>
                <div className='p-4'>
                    <p className='tex mb-1'>Branding</p>
                    <h5 className=' '>Brand Identity and Motion Design</h5>
                </div>
            </div>
            </li>

            </ul>
            </div>
        )}

        {activeTab === 'Marketing' && (
            <div>
                <ul className='row list-unstyled g-4  '>
                 <li className="col-12 col-md-6 col-lg-4  ">
            <div className="project-wrapper position-relative">
                
                <img
                src="https://bentos-next.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fwork4.jpg&w=1920&q=75"
                alt=""
                className="img-fluid project-img"
                />
                
                <div className="hover-overlay  ">
                <div className="icon-circle  ">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className=' '>
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                </div>
                </div>
                <div className='p-4'>
                    <p className='tex mb-1'>Marketing</p>
                    <h5 className=' '>Mobile Application Design</h5>
                </div>
            </div>
                </li>

                    <li className="col-12 col-md-6 col-lg-4  ">
            <div className="project-wrapper position-relative">
                
                <img
                src="https://bentos-next.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fwork4.jpg&w=1920&q=75"
                alt=""
                className="img-fluid project-img"
                />
                
                <div className="hover-overlay  ">
                <div className="icon-circle  ">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className=' '>
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                    </svg>
                </div>
                </div>
                <div className='p-4'>
                    <p className='tex mb-1'>Marketing</p>
                    <h5 className=' '>Brand Identity and Motion Design</h5>
                </div>
            </div>
            </li>
            </ul>
            </div>
        )}

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

export default Work