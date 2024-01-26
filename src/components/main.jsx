import React from 'react';
import Dog1 from './dog/dog1';
import Dog2 from './dog/dog2';
import Picket from './picket/picket';

function Main(){

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop : '50px'
      };
    return(
        <div style={containerStyle}>
            <Dog1/>
            <Picket />
            <Dog2 />
        </div>
    );
}
export default Main