import React from 'react'
import './dog.css';

function Dog(){
    return(
        <div className='dog-container'>
            <div className='ear' id='ear1'></div>
            <div className='dog-head'>
                <div className='eyes'>
                    <div className='eye'></div>
                    <div className='eye'></div>
                </div>
                <div className='nose'></div>
            </div>
            <div className='ear' id='ear2'></div>
        </div>
    );
}
export default Dog