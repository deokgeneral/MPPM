import React from 'react'
import './dog.css';

function Dog(){
    return(
        <>
        <div className='dog-container'>
            <div className='ear' id='ear1'></div>
            <div className='dog-head'>
                <div className='eyes'>
                    <div className='eye'></div>
                    <div className='eye'></div>
                </div>
                <div className='nose'>
                    <div></div>
                    <div></div>
                    <div className='mouth'></div>
                </div>
                <div className='arms'>
                <div className='arm' id='arm1'>
                    <div></div>
                    <div></div>
                </div>
                <div className='arm' id='arm2'>
                    <div></div>
                    <div></div>
                </div>
                </div>
            </div>    
            <div className='ear' id='ear2'></div>
            <div className='foots'>
                <div className='foot1'>
                </div>
                <div className='foot2'>
                </div>
            </div>
        </div>
        </>
    );
}
export default Dog