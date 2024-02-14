import Header from './components/Header';
import UserInputFormPage from './pages/userInputFromPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserInputResultPage from './pages/userInputResultPage';



export default function App() {
  return (
    <div style={{
      backgroundImage: `url('/assets/초원.png')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100vh',
    }}>
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<UserInputFormPage/>}/>
    <Route path='/result' element={<UserInputFormPage/>}/>
    <Route path='/result/:usermbti' element={<UserInputResultPage/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  );
}
