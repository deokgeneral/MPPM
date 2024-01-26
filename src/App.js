import React from 'react';
import Header from './components/header/header';
import Main from './components/main';

function App() {
  const titleStyle = {
    marginTop :'90px',
    textAlign: 'center',
    fontFamily: 'KCCMurukmuruk'
  }
  const titleStyle2 ={
    marginTop : '5px',
    textAlign: 'center',
    fontFamily: 'KCCMurukmuruk'
  }
  return (
    <>
      <Header />
      <h1 style={titleStyle}>
      MBTI를 입력하고, 
      </h1>
      <h3 style={titleStyle2}>
       함께할 반려강아지를 추천 받아라 멍!!
      </h3>
      <Main/>
    </>
  );
}

export default App;
