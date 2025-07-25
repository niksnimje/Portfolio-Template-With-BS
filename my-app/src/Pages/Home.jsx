
import profile from '../assets/profile.png'
import partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
import partner4 from '../assets/partner4.png'
import partner5 from '../assets/partner5.png'
import Nav from 'react-bootstrap/Nav';
import { useEffect, useState } from 'react'
import './Home.css'
import AOS from 'aos';


function Home() {

    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);
  return (
    <>
        <div className="container main-div" >
            <div className="row gap-5 p-1 p-sm-2 p-md-0 justify-content-md-center">
                <div className="back-1 colum-4" >
                    <img src={profile} className='profile-img' alt="" />
                    <h1 className='font_all'>Bentos Walker</h1>
                    <p className='font_all2 mb-5'>I am a Web Designer based in san <br /> francisco.</p>
                    <div className='social-btn font_all'>
                        <ul className='font_all list-unstyled d-flex justify-content-center'>
                            <li className='font_all'>
                                <a href="#" className='social-btn-list'>
                                    <svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" ><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path></svg>
                                </a>
                            </li>
                            <li className='font_all'>
                                <a href="#" className='social-btn-list'>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" ><path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path></svg>
                                </a>
                            </li>
                            <li className='font_all'>
                                <a href="#" className='social-btn-list'>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                                </a>
                            </li>
                            <li className='font_all'>
                                <a href="#" className='social-btn-list'>
                                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  ><path d="M5.88401 18.6533C5.58404 18.4526 5.32587 18.1975 5.0239 17.8369C4.91473 17.7065 4.47283 17.1524 4.55811 17.2583C4.09533 16.6833 3.80296 16.417 3.50156 16.3089C2.9817 16.1225 2.7114 15.5499 2.89784 15.0301C3.08428 14.5102 3.65685 14.2399 4.17672 14.4263C4.92936 14.6963 5.43847 15.1611 6.12425 16.0143C6.03025 15.8974 6.46364 16.441 6.55731 16.5529C6.74784 16.7804 6.88732 16.9182 6.99629 16.9911C7.20118 17.1283 7.58451 17.1874 8.14709 17.1311C8.17065 16.7489 8.24136 16.3783 8.34919 16.0358C5.38097 15.3104 3.70116 13.3952 3.70116 9.63971C3.70116 8.40085 4.0704 7.28393 4.75917 6.3478C4.5415 5.45392 4.57433 4.37284 5.06092 3.15636C5.1725 2.87739 5.40361 2.66338 5.69031 2.57352C5.77242 2.54973 5.81791 2.53915 5.89878 2.52673C6.70167 2.40343 7.83573 2.69705 9.31449 3.62336C10.181 3.41879 11.0885 3.315 12.0012 3.315C12.9129 3.315 13.8196 3.4186 14.6854 3.62277C16.1619 2.69 17.2986 2.39649 18.1072 2.52651C18.1919 2.54013 18.2645 2.55783 18.3249 2.57766C18.6059 2.66991 18.8316 2.88179 18.9414 3.15636C19.4279 4.37256 19.4608 5.45344 19.2433 6.3472C19.9342 7.28337 20.3012 8.39208 20.3012 9.63971C20.3012 13.3968 18.627 15.3048 15.6588 16.032C15.7837 16.447 15.8496 16.9105 15.8496 17.4121C15.8496 18.0765 15.8471 18.711 15.8424 19.4225C15.8412 19.6127 15.8397 19.8159 15.8375 20.1281C16.2129 20.2109 16.5229 20.5077 16.6031 20.9089C16.7114 21.4504 16.3602 21.9773 15.8186 22.0856C14.6794 22.3134 13.8353 21.5538 13.8353 20.5611C13.8353 20.4708 13.836 20.3417 13.8375 20.1145C13.8398 19.8015 13.8412 19.599 13.8425 19.4094C13.8471 18.7019 13.8496 18.0716 13.8496 17.4121C13.8496 16.7148 13.6664 16.2602 13.4237 16.051C12.7627 15.4812 13.0977 14.3973 13.965 14.2999C16.9314 13.9666 18.3012 12.8177 18.3012 9.63971C18.3012 8.68508 17.9893 7.89571 17.3881 7.23559C17.1301 6.95233 17.0567 6.54659 17.199 6.19087C17.3647 5.77663 17.4354 5.23384 17.2941 4.57702L17.2847 4.57968C16.7928 4.71886 16.1744 5.0198 15.4261 5.5285C15.182 5.69438 14.8772 5.74401 14.5932 5.66413C13.7729 5.43343 12.8913 5.315 12.0012 5.315C11.111 5.315 10.2294 5.43343 9.40916 5.66413C9.12662 5.74359 8.82344 5.69492 8.57997 5.53101C7.8274 5.02439 7.2056 4.72379 6.71079 4.58376C6.56735 5.23696 6.63814 5.77782 6.80336 6.19087C6.94565 6.54659 6.87219 6.95233 6.61423 7.23559C6.01715 7.8912 5.70116 8.69376 5.70116 9.63971C5.70116 12.8116 7.07225 13.9683 10.023 14.2999C10.8883 14.3971 11.2246 15.4769 10.5675 16.0482C10.3751 16.2156 10.1384 16.7802 10.1384 17.4121V20.5611C10.1384 21.5474 9.30356 22.2869 8.17878 22.09C7.63476 21.9948 7.27093 21.4766 7.36613 20.9326C7.43827 20.5204 7.75331 20.2116 8.13841 20.1276V19.1381C7.22829 19.1994 6.47656 19.0498 5.88401 18.6533Z"></path></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="colum-8">
                    <div className="row">
                        <div className="col-12 back-1 p-5">
                            <p className='  tex'>Hello There!</p>
                            <h1 className='  text-white ' style={{fontSize:"40px"}}>I’m Bentos Walker, a product designer <br /> crafting user-centric design with <br /> pixel-perfect precision.
                            </h1>
                            <div className='d-flex mt-3 align-content-center  '>
                                <span className='  me-3 '><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#0f0"  ><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg></span><p className='  tex pt-1 m-0'>Available for Freelancing</p>
                            </div>
                            <div className='  mt-3'>
                                <button className='cv_btn'>Download Cv
                                    <span className='  ps-2'>
                                        <svg style={{backgroundColor:"transparent"}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"  ><path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z"></path></svg>
                                    </span>
                                </button>
                            </div>

                        </div>
                        <div className="col-12 back-1 p-5 mt-3">
                            <h3 className='  text-white'>Company I Worked With</h3>
                            <div className="slider mt-3">
                            <div className="slide-track">
                                
                                <img src={partner1} alt="img1" className="slide" />
                                <img src={partner2} alt="img2" className="slide" />
                                <img src={partner3} alt="img3" className="slide" />
                                <img src={partner4} alt="img4" className="slide" />
                                <img src={partner5} alt="img5" className="slide" />

                                <img src={partner1} alt="img1" className="slide" />
                                <img src={partner2} alt="img2" className="slide" />
                                <img src={partner3} alt="img3" className="slide" />
                                <img src={partner4} alt="img4" className="slide" />
                                <img src={partner5} alt="img5" className="slide" />
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br /><br />

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
            <p>Copyright @2025, <span style={{color:"var(--primary-color)"}} data-aos="fade-up">Bentos</span> All Rights Reserved.</p>
            <p data-aos="fade-up">Crafted with ❤️ theme_ocean</p>
        </div>
    </>
  )
}

export default Home