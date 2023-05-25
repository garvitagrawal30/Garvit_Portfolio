import React from 'react'
import './Aboutme.css'

import Dev from '../../img/dev.png';
import Heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from '../../Resume/GarvitResume.pdf';
import Card from '../Card/card';
const aboutme = () => {
  return (
    <div className="aboutme" id='Aboutme'>
      <div className="heading">
      <div className="text">
    
        <span>Web Developer, Programmer & Designer</span>
        <span>I use a creative approach to solve probems </span>

        </div>
        <div className="image">
        <img src={Dev} alt="" />
      </div>
      <div className="button s-button" >
        <a className="button"
          href={Resume} download="GarvitResume.pdf" >
          Download CV 
        </a>
         
        </div>
      </div>
      <div className="blur a-blur" style={{background: '#C1F5FF' , top:'40rem', width:'16rem', height:'9rem', left:'26rem'}}></div>
      <div className="cards">
        <div style={{left:'-60rem', top:'19.2rem'}} >

          <Card
          emoji = {Heartemoji}
          heading = {'Web Developer'}
          detail = {"HTML, CSS , JavaScript , React"}
          />
          
        </div>
        <div style={{left:'-38rem',top:'19.2rem'}}>

          <Card
          emoji = {Glasses}
          heading = {'Programmer'}
          detail = {"C++, OOPs , Python, Data Structures"}
          />
          
        </div>
        <div style={{left:'-15rem',top:'19.2rem'}}>

          <Card
          emoji = {Humble}
          heading = {'Machine Learner'}
          detail = {"NLP, Sentiment Analysis, CNN"}
          />
          
        </div>

      </div>
      
    </div>
  )
}

export default aboutme