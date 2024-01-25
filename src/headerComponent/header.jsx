import React from 'react'
import './hambar.css'
import './header.css'

function Header() {
    return(
        <div className='header-content'>
            <div className='header-title'>M<a>bti</a>P<a>erpect</a>P<a>uppy</a>M<a>aching</a></div>
            <div className='header-menu'>
                <ul id='header-menu'>
                    <li><a href='#'>나의 MBTI</a></li>
                    <li><a href='#'>MBTI 궁합</a></li> 
                    <li><a href='#'>MBTI 롤링페이퍼</a></li>                 
                </ul>
                <div className="hambar">
                    <input type="checkbox" id="icon" />
                            <label htmlFor="icon"> 
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                    <div className='hambar-menu'>
                        <h2>MENU</h2>
                        <ul>
                        <li><a href='#'>나의 MBTI</a></li>
                        <li><a href='#'>MBTI 궁합</a></li>
                        <li><a href='#'>MBTI 롤링페이퍼</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
