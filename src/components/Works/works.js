import React from 'react';
import './works.css';
import port1 from '../../assets/port1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';
// import Portfolio4 from '../../assets/portfolio-4.png';
// import Portfolio5 from '../../assets/portfolio-5.png';
// import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>Projects</h2>
        {/* <span className='worksDesc'>This line contains some discription about the Projects at present i don't know what to write so i'm writing blah blah blah </span> */}
        <div className='worksImgs'>

            <a href='https://github.com/pankajydv15/Chatting-App'>
            <div className='card'>
              <img src={port1} alt='' className='worksImg' id='img'/>
              <p className='ImgDetails'>ChatEase <br/>(Realtime Chatting Application)</p>
            </div>
            </a>

            <a href='https://github.com/pankajydv15/Aqua'>
            <div className='card'>
              <img src={port2} alt='' className='worksImg' />
              <p className='ImgDetails'>Aqua <br/>(Voice Assistant)</p>
            </div>
            </a>


            <a href='https://github.com/pankajydv15/vlog'>
            <div className='card'>
              <img src={port3} alt='' className='worksImg'id='img'/>
              <p className='ImgDetails'>Blog<br/>(Webiste)</p>
            </div>
            </a>

            {/* <img src={Portfolio4} alt='' className='worksImg'/>
            <p className='ImgDetails3'>This is Chatting application</p>


            <img src={Portfolio5} alt='' className='worksImg'/>
            <p className='ImgDetails4'>This is Chatting application</p>

            
            <img src={Portfolio6} alt='' className='worksImg'/>
            <p className='ImgDetails5'>This is Chatting application</p> */}
            
        </div>

        

    </section>
  )
}

export default Works;
