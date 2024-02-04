import React from 'react';
import './skills.css';
import UIDesign from'../../assets/ui-design.png';
import WebDesign from'../../assets/website-design.png';
import Appdesign from'../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className='skillTitle'>What i Do</span>
        <span className='skillDesc'>I'm a Professional WebDevloper. Our Main goal to help & satisfied the Local & Global Clients By web Devplopment Solutions</span>
        <div className='SkillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is Demo Text, You can Write your own content here.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2> WebDesign</h2>
                    <p>This Demo text can be changed while making the production ready website.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={Appdesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>You can Write text related to mobile app Devplopment</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
