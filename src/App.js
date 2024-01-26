import React from 'react';
import Header from './components/header/header';
import Picket from './components/picket/picket';
import Spb from './components/spb/spb';
import Dog from './components/dog/dog';
import Garden from './components/garden/garden';


function App() {
  return (
    <>
      <Header />
      <Spb />
      <Dog />
      <Picket />
      <Garden />
    </>
  );
}

export default App;
