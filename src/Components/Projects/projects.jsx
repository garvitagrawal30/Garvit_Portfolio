import React from 'react'
import './projects.css'
import ICG from '../../img/icg.png';
import Sentiment from '../../img/sentiment.png';
import Portfolio from '../../img/portfolio.png';

const Projects = () => {
  return (
    <div className="projects" id='projects'>
      <div className="heading">

        <span>My Projects</span>
        </div>
        <div className="list">
        
        <div className="sentiment">
        <a href="https://github.com/garvitagrawal30/IPL_2022_Twitter_Sentiment_Analysis/blob/main/Analyser.ipynb" style={{textDecoration:'none'}}>
        <div className="img1">
          <img src={Sentiment} alt="" />
          </div>
          </a>
          <span>IPL 2022 Tweets Sentiment Analyser</span>
          
        </div>
        

        
        <div className="text1">
          <span>A Machine Learning model that analyses the nature of a tweet using NLP and VADER Sentiment analyser.</span>
        </div>
        
        <div className="icg">
          <a href="https://github.com/garvitagrawal30/Image-Caption-Generator/blob/main/Generator.ipynb">
          <div className="img2">
          <img src={ICG} alt="" />
          </div>
          </a>
          <span>Image Caption Generator</span>

        </div>
        <div className="text2">
          <span>A deep learning model that uses CNN and LSTM to generate an appropriate caption for an image.</span>
        </div>
        <div className="portfolio">
          <img src={Portfolio} alt="" />
          <span>Personal Portfolio</span>
        </div>
        <div className="text3">
          <span>A Web Developement project developed using ReactJS and CSS.</span>
        </div>
        </div>
     
    </div>
  )
}

export default Projects