import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UserInputFormPage from './pages/userInputFromPage';
import UserInputResultPage from './pages/userInputResultPage';

export default function App() {
  return (
    <div style={{
      position: 'relative',
      backgroundImage: `url('/assets/초원.png')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      overflow: 'hidden',
      width: '100%',
      height: '100vh',
      zIndex: '0'
    }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path='/' element={<UserInputFormPage />} />
          <Route path='/result' element={<UserInputFormPage />} />
          <Route path='/result/:usermbti' element={<UserInputResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}