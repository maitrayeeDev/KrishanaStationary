import React from 'react';
import './main.css';
import s1 from '../../assets/stationery3-removebg-preview.png'

const Main = () => {
  return (
    <div className='ks__main-section'>
        <div className='ks__main-section__containers'>
            <div className='ks__main-section__containers-container'>
                <div className='ks__main-section__containers-container-line'></div>
                <div className='ks__main-section__containers-container-image'>
                    <img src={s1}/>
                </div>
                <div className='ks__main-section__containers-container-content'>
                    <h3>Price</h3> <p>discount</p>
                    <p>save rs. xyz</p>
                </div>
                <div className='ks__main-section__containers-container-line'></div>
            </div>
        </div>
    </div>
  )
}

export default Main;