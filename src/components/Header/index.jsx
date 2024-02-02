import React from 'react'
import './index.css';
import { MdOutlinePets } from "react-icons/md";
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div className='header-content'>
            <Link to={'/'} className='header-title'>
            <MdOutlinePets />M<a>bti</a>P<a>erpect</a>P<a>uppy</a>M<a>aching</a>
            </Link>
            <div className='header-menu'>
                <ul id='header-menu_li'>
                    <li><a href='#'>나의 MBTI</a></li>
                    <li><a href='#'>MBTI 궁합</a></li> 
                    <li><a href='#'>MBTI 롤링페이퍼</a></li>                 
                </ul>
                    <div className='hambar'>
                        <input type='checkbox' id='icon' />
                        <label htmlFor="icon"> 
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    <div className='hambar-menu'>
                        <h2>MENU</h2>
                        <ul id='hambar-menu_li'>
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