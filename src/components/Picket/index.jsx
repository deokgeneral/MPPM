import React, { useState } from 'react';
import './index.css';

export default function Picket() {

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
          case 'INFJ':
          setResult('ISTP에 대한 사용자 결과');
          break;
          case 'INTJ':
          setResult('ISTP에 대한 사용자 결과');
          break;
          case 'ISTP':
          setResult('ISTP에 대한 사용자 결과');
          break;
          case 'ISFP':
          setResult('ISTP에 대한 사용자 결과');
          break;
          case 'ISFP':
          setResult('ISTP에 대한 사용자 결과');
          break;
          case 'INFP':
          setResult('ISTP에 대한 사용자 결과');
          break;
          case 'INTP':
          setResult('ISTP에 대한 사용자 결과');
          break;
          case 'ESTP':
          setResult('ISTP에 대한 사용자 결과');
          break;
          case 'ESFP':
          setResult('ISTP에 대한 사용자 결과');
          break;
          case 'ENFP':
          setResult('ISTP에 대한 사용자 결과');
          break;
          case 'ENTP':
          setResult('ISTP에 대한 사용자 결과');
          break;
          case 'ESTJ':
          setResult('ISTP에 대한 사용자 결과');
          break;
          case 'ESFJ':
          setResult('ISTP에 대한 사용자 결과');
          break;
          case 'ENFJ':
          setResult('ISTP에 대한 사용자 결과');
          break;
          case 'ENTJ':
          setResult('ISTP에 대한 사용자 결과');
          break;
          default:
          setResult('결과값이없다이노무자슥아!!');
          break;
        }
      };

        const handleTwitterShare = () => {
        // 트위터 공유 로직
            console.log('Twitter 공유');
        };
        const handleFacebookShare = () => {
            console.log('Facebook 공유');
        }; // 페북 공유로직
        const handleKakaoShare = () => {
        // 카카오톡 공유 로직
            console.log('Kakao 공유');
        };
    
  return (
    <div className="picket-container">
      <div className="picket">
          <h2>나의 MBTI</h2>
          <input
          type="text"
          value={userInput}
          onChange={handleUserInputChange}
          placeholder="MBTI를 입력하세요."
          id='input'
          />
          <button onClick={handleShowUserResult} id='result'>
          결과 보기
          </button>

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
