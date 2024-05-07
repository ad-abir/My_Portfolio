import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import resume from '../../assets/Abhishek Das_Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {

  const downloadResume = () => {
    const resumeUrl = resume;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Abhishek Das_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };  

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Abhishek Das,</span> Full Stack Developer based in Bangladesh.</h1>
        <p>I am a full stack developer from Dhaka, Bangladesh with 2 years of experience in multiple companies like WID and GAOTek Inc.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
            <div className="hero-resume" onClick={downloadResume}>Download Resume</div>
        </div>
    </div>
  )
}

export default Hero