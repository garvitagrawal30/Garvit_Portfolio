import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import garvit from '../../img/garvit.png';
import thumbup from '../../img/thumbup.png';
import glassesimoji from '../../img/glassesimoji.png';
import crown from '../../img/crown.png';
import Floatingdiv from '../Floatingdiv/Floatingdiv';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <div className="intro" id='Home'>
        <div className="i-left">
        <div className="i-name">
            <span>Hi! I Am</span>
            <span>Garvit Agrawal</span>
            <span>Frontend Developer with expertise in Machine Learning</span>
        </div>
        <Link spy={true} to= 'contact' smooth={true} >

        <button className="button i-button">Hire Me</button>
        </Link>
        <div className="i-icons">
          <a href='https://github.com/garvit-a30'>
          <img src={Github} alt="" />
          </a>
          <a href='https://www.linkedin.com/in/garvit-a-9b4535112/'>
          <img src={LinkedIn} alt="" />
          </a>
          <a href='https://www.instagram.com/garvit_agrawal30/'>
          <img src={Instagram} alt="" />
          </a>
        </div>

        </div>
        <div className="i-right">
          
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={garvit} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top: '30%', left: '60%'}}>
              <Floatingdiv image={crown} txt1='Web' txt2='Developement'/>
            </div>
            <div style={{top:'60%', right:'69%'}}>
              <Floatingdiv image={thumbup} txt1='Machine' txt2='Learning'/>
            </div>
            <div className="blur" style={{background: '#C1F5FF' , top:'9rem', width:'21rem', height:'11rem', left:'-9rem'}}>

            </div>


            
        </div>
    </div>
  )
}

export default Intro