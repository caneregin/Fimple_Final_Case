import React from 'react'
import "../Footer.css"

function Footer() {
    return (
        // Alt taraf Footer içerikleri ve CSS bilgileri
        <div>
            <div className='footer-left'>
                <div><img className='img-footer-logo' src='https://fimple.co.uk/wp-content/uploads/2020/10/Fimple_Logo-white-1536x710.png' /></div>
                <div><p className='footer-p'>Simple and composable financial platform<br />
                    with the “Financial Function as a Service” principle</p>
                </div>
            </div>
            <div className='footer-right'>
                <ul className='footer-ul'>
                    <li><h5 className='footer-h5'>Contact Us</h5></li>
                    <li className='footer-li'><span className='img-span'><img className='location-icon' src='icon-location.png' /></span><span className='p-span'>Headquarters: 37th Floor, Canary Wharf, 1 Canada Square, London E14<br /> 5AA, United Kingdom</span></li>
                    <li className='footer-li'><span className='img-span'><img className='location-icon' src='icon-location.png' /></span><span className='p-span'>Ataşehir Office: Küçükbakkalköy, Allianz Tower, Kayışdağı Cd. No:1 34750<br /> Ataşehir/İstanbul, Türkiye</span></li>
                    <li className='footer-li'><span className='img-span'><img className='location-icon' src='icon-location.png' /></span><span className='p-span'>Bilişim Vadisi Office: Bilişim Vadisi, B1 Blok Kat 2 Muallimköy Mahallesi,<br /> Deniz Cd. Gebze/Kocaeli, Türkiye</span></li>
                    <li className='footer-li'><span className='img-span'><img className='location-icon' src='icon-location.png' /></span><span className='p-span'>Kartal Operation Center: Soğanlık Yeni Mahallesi, Aliağa Sokak, Bumerang<br /> Kartal No: 8/5 34880, Kartal/İstanbul, Türkiye</span></li>
                    <li className='footer-li'><span className='img-span-last'><img className='location-icon' src='icon-location.png' /></span><span className='p-span'>Email: info@fimple.co.uk</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer