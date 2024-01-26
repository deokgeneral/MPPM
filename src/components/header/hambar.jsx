import React from "react";
import './hambar.css';

function Hambar () {
    return (
        <>
        <div className="hambar">
                <input type="checkbox" id="icon" />
                <label htmlFor="icon"> 
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div className='hambar-menu'>
                    <h2>MENU</h2>
                    <ul className='hambar-menu_li'>
                    <li><a href='#'>나의 MBTI</a></li>
                    <li><a href='#'>MBTI 궁합</a></li>
                    <li><a href='#'>MBTI 롤링페이퍼</a></li>
                    </ul>
                </div>
        </div>
        </>
    );
}
export default Hambar