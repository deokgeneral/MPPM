import Header from './components/Header';
import UserInputFormPage from './pages/userInputFromPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserInputResultPage from './pages/userInputResultPage';



function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<UserInputFormPage/>}/>
    <Route path='/result/:usermbti' element={<UserInputResultPage/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
