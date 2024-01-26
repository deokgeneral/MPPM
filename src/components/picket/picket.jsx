import React, { useState } from 'react';
import './picket.css';

function Picket() {

  const [result, setResult] = useState('');
  const [userInput, setUserInput] = useState('');

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleShowUserResult = () => {
    switch (userInput.toUpperCase()) {
      case 'ISTJ':
        setResult('ISTJ에 대한 사용자 결과');
        break;
      case 'ISTP':
        setResult('ISTP에 대한 사용자 결과');
        break;
      // MBTI 사용자 결과 설정
      default:
        setResult('');
        break;
    }
  };
    const handleTwitterShare = () => {
    // Twitter 공유 로직
        console.log('Twitter 공유');
    };

    const handleFacebookShare = () => {
    // Facebook 공유 로직
        console.log('Facebook 공유');
    };

    const handleKakaoShare = () => {
    // Kakao 공유 로직
        console.log('Kakao 공유');
    };
  return (
    <div className="picket-container">
      <div className="picket">
            <div className="select-content">
            </div>
            {/* 사용자 입력 받는 부분 */}
            <div className="user-input">
            <h2>나의 MBTI</h2>
                <input
                type="text"
                value={userInput}
                onChange={handleUserInputChange}
                placeholder="대문자로 입력하세요."
                id='input'
                />
            </div>
            <button onClick={handleShowUserResult} id='result'>
            결과 보기
            </button>
            {/* 결과 출력 */}
            {result && (
            <div className="result-container">
                <h3>결과</h3>
                <p>{result}</p>
            </div>
            )}
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
}

export default Picket;