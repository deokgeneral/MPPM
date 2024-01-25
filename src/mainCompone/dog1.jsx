import React from 'react'
import './dog1.css';

function Dog1(){
    return(
        <div className='container'>
            <div className='dog1-container'>
                <div className='dog1-headcontent'>
                        <div className='dog1-ears' id='dog1-ear1'></div>
                        <div className='dog1-head'>
                        <div className='dog1-face'>
                            <div className='dog1-eyes' id='dog1-eye1'></div>
                            <div className='dog1-nose'></div>
                            <div className='dog1-eyes' id='dog1-eye2'></div>
                        </div>
                        <div class="dog1-mouth-content">
                                <svg width="100" height="51" xmlns="http://www.w3.org/2000/svg" id='dog1-mouth1'>
                                <path d="M 50 60 Q 80 0, 80 70" stroke="black" fill="transparent" stroke-width="4"/>
                                </svg>
                                <svg width="100" height="51" xmlns="http://www.w3.org/2000/svg" id='dog1-mouth2'>
                                <path d="M 50 60 Q 80 0, 80 70" stroke="black" fill="transparent" stroke-width="4"/>
                                </svg>
                        </div>
                    </div>
                        <div className='dog1-ears' id='dog1-ear2'></div>
                </div>
                <div className='dog1-arms-content'>
                    <div className='dog1-arms' id='dog1-arm1'></div>
                    <div className='dog1-arms' id='dog1-arm2'></div>
                </div>
                <div className='dog1-body'>
                <div className='dog1-foot'>
                    <div id='dog1-foot1'></div>
                    <div id='dog1-foot2'></div>
                </div>
                <div className='dog1-tail'></div>
                </div>
            </div>
        </div>
    );
}
export default Dog1