import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>Projects</h2>
        <span className='worksDesc'>This line contains some discription about the Projects at present i don't know what to write so i'm writing blah blah blah </span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt='' className='worksImg'/><p className='ImgDetails'>This is Chatting application</p>
            <img src={Portfolio2} alt='' className='worksImg'/><p className='ImgDetails1'>This is Chatting application</p>
            <img src={Portfolio3} alt='' className='worksImg'/><p className='ImgDetails2'>This is Chatting application</p>
            <img src={Portfolio4} alt='' className='worksImg'/><p className='ImgDetails3'>This is Chatting application</p>
            <img src={Portfolio5} alt='' className='worksImg'/><p className='ImgDetails4'>This is Chatting application</p>
            <img src={Portfolio6} alt='' className='worksImg'/><p className='ImgDetails5'>This is Chatting application</p>
            
        </div>
    </section>
  )
}

export default Works;
