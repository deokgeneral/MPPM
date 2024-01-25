import React from 'react';
import Header from './headerComponent/header';
import Main from './mainCompone/main';

function App() {
  const titleStyle = {
    marginTop :'128px',
    textAlign: 'center',
    fontSize :'1.75rem',
    fontWeight : '900'
  }
  const titleStyle2 ={
    textAlign: 'center',
    fontSize :'1.15rem',
    fontWeight : '900'
  }
  return (
    <>
      <Header />
      <div style={titleStyle}>
        자신의 MBTI를 입력하고,
        </div>
      <div style={titleStyle2}>
      함께할 반려강아지를 추천 받으세요.
      </div>
      <Main/>
    </>
  );
}

export default App;
