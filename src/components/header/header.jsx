import React from 'react'
import './header.css'
import Hambar from './hambar';
import { FaDog } from "react-icons/fa";

function Header() {
    return(
        <div className='header-content'>
            <h2 className='header-title'><FaDog />M<a>bti</a>P<a>erpect</a>P<a>uppy</a>M<a>aching</a></h2>
            <div className='header-menu'>
                <ul className='header-menu_li'>
                    <li><a href='#'>나의 MBTI</a></li>
                    <li><a href='#'>MBTI 궁합</a></li> 
                    <li><a href='#'>MBTI 롤링페이퍼</a></li>                 
                </ul>
            <Hambar />
            </div>
        </div>
    );
}
export default Header;
