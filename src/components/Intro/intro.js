import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Ashwani</span><br />Website Developer</span>
            <p className='introPara'>I graduated at Purvanchal University.
             I'm writing to express <br/>my interest in the Frontend Developer position available at <br/> your organization.
             My knowledge of web development,design <br/> principles, and coding languages make me an excellent fit for  <br/> this role. If chosen, I can use these skills to contribute significantly.</p>
            <Link><button className='btn'><img scr={btnImg} alt="" className='btnImg'/>Hire Me</button></Link>
           
       </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro
