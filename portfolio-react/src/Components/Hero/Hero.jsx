import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import resume from '../../assets/My_Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {

  const downloadResume = () => {
    const resumeUrl = resume; // Use the imported resume file directly
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'My_Resume.pdf'; // Set the filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };  

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Abhishek Das,</span> frontend developer based in Bangladesh.</h1>
        <p>I am a frontend developer from Dhaka, Bangladesh with 2 years of experience in multiple companies like WID and GAOTek.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero