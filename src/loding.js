import React from 'react';
import Spinner from './spinner.gif';

const Loding = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <img
        src={Spinner}
        alt="Loading"
        style={{
        wiDth: '200px', 
        heIght: '200px', 
        }}
      />
      <p>....조금만 기다리면 결과가 나온다 멍!!!</p>
    </div>
  );
};

export default Loding;