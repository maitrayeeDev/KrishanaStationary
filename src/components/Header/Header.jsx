import React from 'react'
import './header.css';
import s1 from '../../assets/stationery3-removebg-preview.png'

const Header = () => {
  return (
    <div className='ks__header-section'>
      <div className='ks__header-section1'>
        <div className='ks__header-section_heading'>
            <h1 className='gradient__text'>The largest selection of personalized stationery and gifts for everyone in the family</h1>
            <p>Get more creative with our stationery collection</p>
        </div>
        <div className='ks__header-section_container'>
            <img src={s1}/>
        </div>
      </div>
        <div className='ks__header-section-button'>
          <button type='button'>Grab!</button>
        </div>
    </div>
  )
}

export default Header;