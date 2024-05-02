import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Abhishek Das,</span> frontend developer based in Bangladesh.</h1>
        <p>I am a frontend developer from Dhaka, Bangladesh with 2 years of experience in multiple companies like WID and GAOTek.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero