import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const handleTwitterShare = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('트위터로 공유하기')}`;
    window.open(shareUrl, '_blank');
  };
  const handleFacebookShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(shareUrl, '_blank');
  };
  const handleKakaoShare = () => {
    console.log('Kakao 공유');
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
          <div className='sharebtn_content'>
          <h3>공유하기</h3>
          <button type='button' onClick={handleTwitterShare} className='share_btn'>
            <img src='https://deokgeneral.github.io/My_MPPM_Project/assets/icon-twitter.png' alt='Twitter 아이콘' />
          </button>
          <button type='button' onClick={handleFacebookShare} className='share_btn'>
            <img src='https://deokgeneral.github.io/My_MPPM_Project/assets/icon-facebook.png' alt='Facebook 아이콘' />
          </button>
          <button type='button' onClick={handleKakaoShare} className='share_btn'>
            <img src='https://deokgeneral.github.io/My_MPPM_Project/assets/icon-kakao.png' alt='Kakao 아이콘' />
          </button>
          </div>
      </div>
    </div>
  );
};

export default Picket;
