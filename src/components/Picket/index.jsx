/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sharebtn from '../Sharebtn';
import './index.css';

const Picket = () => {
  const [usermbti, setUsermbti] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUsermbti(e.target.value);
  };

  const handleSubmit = () => {
    navigate(`/result/${usermbti.toUpperCase()}`);
  };

  const handleKeyPress = (Enter) => {
    if (Enter.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className='picket-container'>
      <div className='picket'>
        <div className='user-input'>
          <input
            autoComplete='off'
            type='text'
            value={usermbti}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder='MBTI를 입력하세요.'
            className='textbox'
          />
          <button
            onClick={handleSubmit}
            type='button'
            className='resultbtn'
          >결과보기</button>
        </div>
        <h3 className='sharebtn-title'>공유하기</h3>
        <Sharebtn />
      </div>
    </div>
  );
};

export default Picket; 