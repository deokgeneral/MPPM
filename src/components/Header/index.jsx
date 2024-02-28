import React from 'react';
import { MdOutlinePets } from "react-icons/md";
import { Link } from 'react-router-dom';
import './index.css';

function Header() {
    return(
        <div className='header-content'>
            <Link to={'/'} className='header-title'>
            <MdOutlinePets />M<a>bti</a>P<a>erpect</a>P<a>uppy</a>M<a>aching</a>
            </Link>
                <div className='header-menu'>
                    <ul id='header-menu_li'>
                        <li><a href='https://www.16personalities.com/ko' target='_blank' rel="noreferrer">나의 MBTI</a></li>
                        <li><a href='https://pushoong.com/MBTI/relationship/' target='_blank' rel="noreferrer">MBTI 궁합</a></li> 
                        <li><a href='https://zombiembti.net/test/rollingpaper2/' target='_blank' rel="noreferrer">MBTI 롤링페이퍼</a></li>                 
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
                        <li><a href='https://www.16personalities.com/ko'>나의 MBTI</a></li>
                        <li><a href='https://pushoong.com/MBTI/relationship/'>MBTI 궁합</a></li> 
                        <li><a href='https://zombiembti.net/test/rollingpaper2/'>MBTI 롤링페이퍼</a></li>                 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
