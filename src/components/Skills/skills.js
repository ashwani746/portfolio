import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span> 
      <span className='skillDesc'>I am a skilled and passionate web development with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am profient in HTML,CSS,JAVASCRIPT and REACT as well as Design software such as Adobe Photoshop and Illustrator. </span>      
      <div className='skillBars'>
          <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                <p>This is the Demo text,you can write the own content</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>website Design </h2>
                <p>This demo text can be changed while making the production ready website</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>App Design</h2>
                <p>This demo text can be changed while making the production ready website</p>
            </div>
          </div>
      </div> 
    </section>
  )
}

export default Skills