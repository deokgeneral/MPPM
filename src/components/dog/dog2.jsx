import React from 'react'
import './dog2.css';

function Dog2(){
    return(
        <div className='dog-container'>
            <div className='dog2-container'>
                <div className='dog2-headcontent'>
                        <div className='dog2-ears' id='dog2-ear1'></div>
                        <div className='dog2-head'>
                        <div className='dog2-face'>
                            <div className='dog2-eyes' id='dog2-eye1'></div>
                            <div className='dog2-nose'></div>
                            <div className='dog2-eyes' id='dog2-eye2'></div>
                        </div>
                        <div class="dog2-mouth-content">
                                <svg width="100" height="51" xmlns="http://www.w3.org/2000/svg" id='dog2-mouth1'>
                                <path d="M 50 60 Q 80 0, 100 70" stroke="black" fill="transparent" stroke-width="4"/>
                                </svg>
                                <svg width="100" height="51" xmlns="http://www.w3.org/2000/svg" id='dog2-mouth2'>
                                <path d="M 50 60 Q 80 0, 100 70" stroke="black" fill="transparent" stroke-width="4"/>
                                </svg>
                        </div>
                    </div>
                        <div className='dog2-ears' id='dog2-ear2'></div>
                </div>
                <div className='dog2-arms-content'>
                    <div className='dog2-arms' id='dog2-arm1'></div>
                    <div className='dog2-arms' id='dog2-arm2'></div>
                </div>
                <div className='dog2-body'>
                <div className='dog2-foot'>
                    <div id='dog2-foot1'></div>
                    <div id='dog2-foot2'></div>
                </div>
                <div className='dog2-tail'></div>
                </div>
            </div>
        </div>
    );
}
export default Dog2