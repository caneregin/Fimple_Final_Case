import React from 'react'
import "../Header.css"

function Header() {
    return (
        // Üst taraf Header bölümü içerikleri ve stil bilgileri
        <div className='header'>
            <div className='logo'><img className='header-img' src='https://fimple.co.uk/wp-content/uploads/2020/09/Fimple_Logo-edited-logo-2.svg'/></div>
            <div className='navi-items'>
                <ul className='header-ul'>
                    <li className='header-li'>Solutions</li>
                    <li className='header-li'>About Us</li>
                    <li className='header-li'>Why Fimple</li>
                    <li className='header-li'>How it Works</li>
                    <li className='header-li'>Developer Center</li>
                    <li className='header-li'>Contact Us</li>
                </ul>
            </div>
            <div className='header-button'>
                <img className='header-button-in' src="header.png"  />
                </div>
        </div>
    )
}

export default Header