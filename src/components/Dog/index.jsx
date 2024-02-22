import React from 'react'
import './index.css';

function Dog(){
    return(
        <div className='dog_contents'>
            <div className='dog_head'>
                <div className='eyes'>
                    <div></div>
                    <div></div>
                </div>
                <div className='dog_nose'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className='dog_arms'>
                    <div className='dog_arm1'>
                       <span></span>
                       <span></span>
                    </div>
                    <div className='dog_arm2'>
                       <span></span>
                       <span></span>
                    </div>
                </div>
            </div>
            <div className='dog_ears'>
                    <div></div>
                    <div></div>
                </div>
        </div>
    );
}
export default Dog