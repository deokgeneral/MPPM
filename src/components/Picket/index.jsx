import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';


const Picket = () => {

  const handleTwitterShare = () => {
    console.log('Twitter 공유');
  };
  const handleFacebookShare = () => {
    console.log('Facebook 공유');
  };
  const handleKakaoShare = () => {
    console.log('Kakao 공유');
  };

  const [usermbti, setUsermbti] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUsermbti(e.target.value);
  };

  const handleSubmit = () => {
    navigate(`/result/${usermbti.toUpperCase()}`);
  };

  return (
    <div className="picket-container">
      <div className="picket">
        <div className="user-input">
          <h2>나의 MBTI</h2>
          <input
            type="text"
            value={usermbti}
            onChange={handleInputChange}
            placeholder="MBTI를 입력하세요."
            id='input'
          />
          <button onClick={handleSubmit} id='result'>
            결과 보기
          </button>
        </div>

        <div className="sharebtn_content">
          <h3>공유하기</h3>
          <button type="button" onClick={handleTwitterShare} className="share_btn">
            <img src="/assets/icon-twitter.png" alt="Twitter 아이콘" />
          </button>
          <button type="button" onClick={handleFacebookShare} className="share_btn">
            <img src="/assets/icon-facebook.png" alt="Facebook 아이콘" />
          </button>
          <button type="button" onClick={handleKakaoShare} className="share_btn">
            <img src="/assets/icon-kakao.png" alt="Kakao 아이콘" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Picket;
