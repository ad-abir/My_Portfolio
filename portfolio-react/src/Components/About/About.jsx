import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>As a dedicated full-stack developer, I thrive on innovation and problem-solving. In the past two years, I've honed my skills across various technologies:</p>
                    <p>
                        <li>Languages: C/C++, Java, Python, PHP, Dart (for Flutter), Solidity</li>
                        <li>Front-end: HTML, CSS, JavaScript, Bootstrap, React JS, Flutter</li>
                        <li>Back-end: Laravel, Firebase</li>
                        <li>Database: MySQL</li>
                        <li>CMS: WordPress (Elementor)</li>
                        <li>Blockchain: Solidity</li>
                    </p>
                    <p>My focus is on pushing the boundaries in web, mobile, and blockchain development, staying updated with emerging tech to deliver impactful solutions.</p>
                    
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>PHP & Laravel</p><hr style={{width:"90%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"30%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About