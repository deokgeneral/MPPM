import React from 'react';
import Spinner from './spinner.gif';
import { MdOutlinePets } from "react-icons/md";

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
        <p
        style={{
            fontSize:'1.85rem',
            color:'burlywood'
        }}
        >
        ....조금만 기다리면 결과가 나온다 멍!!!
        </p>

      <div
        style={{
          display: 'flex',
          margin: '15px',
          fontSize:'1.85rem',
          color:'burlywood'
        }}
      >
        <div style={{ marginRight: '10px', animation: 'loding-ani 2.4s ease-out forwards' }}>
          <MdOutlinePets />
        </div>
        <div style={{ marginRight: '10px', animation: 'loding-ani 2.4s ease-out 0.8s forwards' }}>
          <MdOutlinePets />
        </div>
        <div style={{ animation: 'loding-ani 2.4s ease-out 1.6s forwards' }}>
          <MdOutlinePets />
        </div>
      </div>
      <style>
        {`
          @keyframes loding-ani {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `
        }
      </style>
    </div>
  );
};

export default Loding;