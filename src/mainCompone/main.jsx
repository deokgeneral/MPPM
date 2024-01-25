import React from 'react';
import './picket.css'
import Dog1 from './dog1';
import Dog2 from './dog2';

function Main(){
    return(
        <div className='container'>
            <Dog1 />
            <div className='picket-container'>
                <div className='picket'>피켓</div>
            </div>
            <Dog2 />
        </div>
    );
}
export default Main