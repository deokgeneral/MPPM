import React from 'react'
import './dog1.css'
import './dog2.css'
import './picket.css'

function Main(){
    return(
        <div className='container'>
            <div className='dog1-container'>
                <div className='dog-1-headcontent'>
                    <div className='dog1-head'></div>
                    <div className='dog1-ear'></div>
                    <div className='dog-face'></div>
                </div>
                <div className='dog1-body'></div>
                <div className='dog1-foot'></div>
                <div className='dog1-tail'></div>
            </div>
            <div className='picket-container'>
                <div className='picket'></div>
            </div>
            <div className='dog2'>강아지2</div>
        </div>
    );
}
export default Main