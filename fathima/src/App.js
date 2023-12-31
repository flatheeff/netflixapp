import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import MainPage from './Components/MainPage.jsx';
import Login from './Components/Login.jsx';
import Content from './Components/Content.jsx';
import DisplayPage from './Components/DisplayPage.jsx';
import SampleForm from './pages/SampleForm.jsx';

import {
  BrowserRouter,
  Form,
  Route,
  Routes,
} from "react-router-dom";





function App() {
  return (

    <BrowserRouter>
      <div className=" h-screen bg-black bg-opacity-75 bg-[url('https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg')] bg-blend-darken">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/content" element={<content />} />
          <Route path="/displaypage" element={<DisplayPage/>}/>
          <Route path="/sampleform" element={<SampleForm/>}/>



        </Routes>
      






      
      {/* <Content /> */}

      {/* <Footer /> */}
      </div>

    </BrowserRouter >
    
  );

}

export default App;