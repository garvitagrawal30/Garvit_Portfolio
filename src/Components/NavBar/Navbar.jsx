import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'


const Navbar = () => {
  return (
   <div className="n-wrapper" id='Navbar'>
    <div className="n-left">
        <div className="n-name">Garvit</div>
        
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType: 'none'}}>
                <Link spy={true} to= 'Home' smooth={true} >
                <li>Home</li>
                </Link>
                <Link spy={true} to= 'Aboutme' smooth={true} >
                <li>About me</li>
                </Link>
                <Link spy={true} to= 'projects' smooth={true} >
                <li>Projects</li>
                </Link>
            </ul>
        </div>
        <Link spy={true} to= 'contact' smooth={true} >
        <button className="button n-button">
            Contact Me

        </button>
        </Link>
    </div>


   </div>

   
  )
}

export default Navbar