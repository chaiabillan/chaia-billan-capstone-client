import './App.scss';
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import CommunityPage from './pages/CommunityPage/CommunityPage';
import Header from './Components/Header/Header';
import TravelGuidePage from './pages/TravelGuidePage/TravelGuidePage';
import ResourcesPage from './pages/ResourcesPage/ResourcesPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ScrollToTopOnMount from './Components/ScrollToTopOnMount/ScrollToTopOnMount';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>} scrollToTop={<ScrollToTopOnMount />}/>
            <Route path='/community' element={<CommunityPage/>}/>
            <Route path='/travel-guide' element={<TravelGuidePage/>}/>
            <Route path='/resources' element={<ResourcesPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
          </Routes>
          < ScrollToTopOnMount />
        </BrowserRouter>

    </div>
  );
}

export default App;
