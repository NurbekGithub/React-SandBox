import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='container column'>
        <div className='row'>
          <div className='brand'>
            <div className='brand__image'><img src={require("../assets/img/logoFooter.png")} alt="logo"/></div>
            <p className='brand__copy'>Copyright © 2017 Facebook Inc.</p>
          </div>
          <div className='footerNav'>
            <h4 className='footerNav__heading'>Docs</h4>
            <p className="footerNav__text">Quick Start</p>
            <p className="footerNav__text">Thinking in React</p>
            <p className="footerNav__text">Tutorial</p>
            <p className="footerNav__text">Advanced Guides</p>
          </div>
          <div className="footerNav">
            <h4 className='footerNav__heading'>Community</h4>
            <p className="footerNav__text">Stack Overflow <span></span></p> 
            <p className="footerNav__text">Discussion Forun <span></span></p> 
            <p className="footerNav__text">Reactiflux Chat <span></span></p> 
            <p className="footerNav__text">Facebook <span></span></p> 
            <p className="footerNav__text">Twitter <span></span></p> 
          </div>
        </div>
        <div className='row'>
          <div className='footerNav'>
            <h4 className='footerNav__heading'>RESOURCES</h4>
            <p className="footerNav__text">Conferences</p>
            <p className="footerNav__text">Videos</p>
            <p className="footerNav__text">Examples <span></span></p>
            <p className="footerNav__text">Complementary Tools <span></span></p>
          </div>
          <div className='footerNav'>
            <h4 className='footerNav__heading'>More</h4>
            <p className="footerNav__text">Blog</p>
            <p className="footerNav__text">Github <span></span></p>
            <p className="footerNav__text">React Native <span></span></p>
            <p className="footerNav__text">Acknowledgements <span></span></p>
          </div>
        </div>
      </div>
    </footer>
  )
  
}

export default Footer;