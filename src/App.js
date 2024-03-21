import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import CommunityPage from './pages/CommunityPage/CommunityPage';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/community' element={<CommunityPage/>}/>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
