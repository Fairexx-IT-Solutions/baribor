import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';

function About() {
    return (
        <div className='about  col-xm-12 col-sm-12 col-md-12 main-wrapper'>
            <section className='about-me-section p-3 p-lg-5  about-plate'>
                <div className='container'>
                    <div className='profile-teaser row'>
                        <div className='col'>
                            <h2 className='name font-weight-bold mb-1'>
                                Baribor Paago
                            </h2>

                            <div className='tagline mb-3'>
                                Software Engineer
                            </div>
                            <div className='bio mb-4'>
                                I'm a software engineer with frontend development 
                                skills for scalable wep applications. I write about software and tech
                                on <a className='text-link' href='google.com'>
                                    my blog
                                </a>. Check out my project <a className='text-link' href='google.com'>
                                    portfolio
                                </a> and my <a className='text-link' href='google.com'>
                                    online rsume
                                </a>.
                            </div>

                            <div className='mb-4'>
                                <a className='btn btn-primary me-2 mb-3'
                                href='google.com'>
                                    < BsArrowRightCircleFill className='me-2'/>
                                    <span className='d-none d-md-inline'>View </span>
                                    Portfolio
                                </a>

                                <a className='btn btn-secondary me-2 mb-3'
                                href='google.com'>
                                    < HiDocumentText className='me-2' />
                                    <span className='d-none d-md-inline'>View </span>
                                    Resume
                                </a>
                            </div>

                        </div>
                        <div className='col-md-5 col-lg-5'>
                            <img className='profile-image img-fluid mb-3 mb-lg-0
                            me-md-0' src='./images/profile.jpg' alt='image0' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='overview-section p-3 p-lg-5'>
                <div className='container'>
                    <h2 className='section-title fon-weight-bold mb-3'>
                        
                        What I do
                    </h2>

                    <div className='section-intro mb-5'>
                        I build scalabe applications for clients all over the 
                        world. Below is a quick overview of my main technical 
                        skill sets. I\f you want find out more about my experience, check out my  
                         <a className='text-link' href='google.com'>
                             online resume 
                        </a> 
                         and <a className='text-link' href='google.com'>
                            project portfolio
                        </a>.
                    </div>
                    <div className='row'>
                        <div className='item col-6 col-lg-3'>
                            <div className='item-inner'>
                                <div className='item-icon'>

                                </div>
                                <h3 className='item-title'>JavaScript</h3>
                                <div className='item-desc'>
                                    <p>JavaScript helps me to provide 
                                        interactivity or funnctionalities</p>
                                </div>
                            </div>
                        </div>

                        <div className='item col-6 col-lg-3'>
                            <div className='item-inner'>
                                <div className='item-icon'>

                                </div>
                                <h3 className='item-title'>React</h3>
                                <div className='item-desc'>
                                    <p>JavaScript helps me to provide 
                                        interactivity or funnctionalities</p>
                                </div>
                            </div>
                        </div>

                        <div className='item col-6 col-lg-3'>
                            <div className='item-inner'>
                                <div className='item-icon'>

                                </div>
                                <h3 className='item-title'>Bootstrap</h3>
                                <div className='item-desc'>
                                    <p>JavaScript helps me to provide 
                                        interactivity or funnctionalities</p>
                                </div>
                            </div>
                        </div>

                        <div className='item col-6 col-lg-3'>
                            <div className='item-inner'>
                                <div className='item-icon'>

                                </div>
                                <h3 className='item-title'>CSS</h3>
                                <div className='item-desc'>
                                    <p>JavaScript helps me to provide 
                                        interactivity or funnctionalities</p>
                                </div>
                            </div>
                        </div>

                        <div className='item col-6 col-lg-3'>
                            <div className='item-inner'>
                                <div className='item-icon'>

                                </div>
                                <h3 className='item-title'>HTML</h3>
                                <div className='item-desc'>
                                    <p>JavaScript helps me to provide 
                                        interactivity or funnctionalities</p>
                                </div>
                            </div>
                        </div>

                        <div className='item col-6 col-lg-3'>
                            <div className='item-inner'>
                                <div className='item-icon'>

                                </div>
                                <h3 className='item-title'>Node.js</h3>
                                <div className='item-desc'>
                                    <p>JavaScript helps me to provide 
                                        interactivity or funnctionalities</p>
                                </div>
                            </div>
                        </div>

                        <div className='item col-6 col-lg-3'>
                            <div className='item-inner'>
                                <div className='item-icon'>

                                </div>
                                <h3 className='item-title'>Figma</h3>
                                <div className='item-desc'>
                                    <p>JavaScript helps me to provide 
                                        interactivity or funnctionalities</p>
                                </div>
                            </div>
                        </div>





                    </div>

                    <div className='text-center py-3'>
                        <a href='google.com' className='btn btn-primary'>
                            Services
                        </a>
                    </div>
                </div>
            </section>
            <div className='container'>
                <hr />
            </div>

            {/* <section className='testimonials-section p-3 p-lg-5'>
                <div className='container'>
                    <h2 className='section-title font-weight-bold mb-5'>
                        ::before
                        Testimonials
                    </h2>
                    <div className='testimonial-carousel-container'>
                        <div className='tns-outer' id='tns1-ow'>
                            <div className='tns-livergion tns-visually-hidden'
                            aria-live='polite' aria-atomic='true'>
                                slide
                                <span className='current'>11 to 12</span>
                                of 6
                            </div>
                            <div id='tns1-mw' className='tns-ovh'>
                                <div className='tns-inner' id='tns1-iw'>
                                    <div className='testimonial-carousel
                                    tiny-slider tns-slider tns-carousel tns-subpixel
                                    tns-calc tns-horizontal' id='tns1'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className='featured-section p-3 p-lg-5'>
                <div className='container'>
                    <h2 className='section-title font-weight-bold mb-5'>
                        
                        Featured Projects
                    </h2>
                    <div className='row'>
                        <div className='col-md-6 mb-5'>
                            <div className='card project-card'>
                                <div className='row no-gutters'>
                                    <div className='col-12 col-xl-5 card-img-holder'>
                                        <img src='./images/profile.jpg' alt='project1' className='card-img'/>
                                    </div>
                                    <div className='col-12 col-xl-7'>
                                        <div className='card-body'>
                                            <h5 className='card-tittle'>Project</h5>
                                            <p className='card-text'>
                                            Project intro lorem ipsum dolor sit amet, 
                                            consectetuer adipiscing elit. Cum sociis 
                                            natoque penatibus et magnis dis parturient 
                                            montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 mb-5'>
                            <div className='card project-card'>
                                <div className='row no-gutters'>
                                    <div className='col-12 col-xl-5 card-img-holder'>
                                        <img src='./images/profile.jpg' alt='project1' className='card-img'/>
                                    </div>
                                    <div className='col-12 col-xl-7'>
                                        <div className='card-body'>
                                            <h5 className='card-tittle'>Project</h5>
                                            <p className='card-text'>
                                            Project intro lorem ipsum dolor sit amet, 
                                            consectetuer adipiscing elit. Cum sociis 
                                            natoque penatibus et magnis dis parturient 
                                            montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 mb-5'>
                            <div className='card project-card'>
                                <div className='row no-gutters'>
                                    <div className='col-12 col-xl-5 card-img-holder'>
                                        <img src='./images/profile.jpg' alt='project1' className='card-img'/>
                                    </div>
                                    <div className='col-12 col-xl-7'>
                                        <div className='card-body'>
                                            <h5 className='card-tittle'>Project</h5>
                                            <p className='card-text'>
                                            Project intro lorem ipsum dolor sit amet, 
                                            consectetuer adipiscing elit. Cum sociis 
                                            natoque penatibus et magnis dis parturient 
                                            montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 mb-5'>
                            <div className='card project-card'>
                                <div className='row no-gutters'>
                                    <div className='col-12 col-xl-5 card-img-holder'>
                                        <img src='./images/profile.jpg' alt='project1' className='card-img'/>
                                    </div>
                                    <div className='col-12 col-xl-7'>
                                        <div className='card-body'>
                                            <h5 className='card-tittle'>Project</h5>
                                            <p className='card-text'>
                                            Project intro lorem ipsum dolor sit amet, 
                                            consectetuer adipiscing elit. Cum sociis 
                                            natoque penatibus et magnis dis parturient 
                                            montes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                    <div className='text-center py-3'>
                        <a href='google.com' className='btn btn-primary'>
                            View Portfolio
                        </a>

                    </div>
                </div>
            </section>
            <div className='container'>
                <hr />
            </div>

            <section className='blog-section p-3 p-lg-5'>
                <div className='container'>
                    <h2 className='section-title font-weight-bold mb-5'>
                        
                        Latest Blog Posts
                    </h2>

                    <div className='row'>
                        <div className='col-md-4 mb-5'>
                            <div className='card blog-post-card'>
                                <img className='card-img-top'
                                src='./images/profile.jpg' alt='imageblogpost' />
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        <a className='theme-link'
                                        href='google.com'>
                                            Top 3 JavaScript Frameworks
                                        </a>
                                    </h5>
                                    <p className='card-text'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Aenean commodo ligula eget dolor. Aenean massa. 
                                    Cum sociis natoque penatibus et 
                                    magnis dis parturient...
                                    </p>
                                    <p className='mb-0'>
                                        <a className='text-link' href='google.com'>
                                            Read more
                                        </a>
                                    </p>
                                
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 mb-5'>
                            <div className='card blog-post-card'>
                                <img className='card-img-top'
                                src='./images/profile.jpg' alt='imageblog' />
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        <a className='theme-link'
                                        href='google.com'>
                                            Top 3 JavaScript Frameworks
                                        </a>
                                    </h5>
                                    <p className='card-text'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Aenean commodo ligula eget dolor. Aenean massa. 
                                    Cum sociis natoque penatibus et 
                                    magnis dis parturient...
                                    </p>
                                    <p className='mb-0'>
                                        <a className='text-link' href='google.com'>
                                            Read more
                                        </a>
                                    </p>
                                
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-5'>
                            <div className='card blog-post-card'>
                                <img className='card-img-top'
                                src='./images/profile.jpg' alt='blogimage'/>
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        <a className='theme-link'
                                        href='google.com'>
                                            Top 3 JavaScript Frameworks
                                        </a>
                                    </h5>
                                    <p className='card-text'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Aenean commodo ligula eget dolor. Aenean massa. 
                                    Cum sociis natoque penatibus et 
                                    magnis dis parturient...
                                    </p>
                                    <p className='mb-0'>
                                        <a className='text-link' href='google.com'>
                                            Read more
                                        </a>
                                    </p>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center py-3'>
                        <a href='google.com' className='btn btn-primary'>
                            View Blog
                        </a>
                    </div>
                </div>
                
            </section>
            
        </div>
    )
}

export default About
