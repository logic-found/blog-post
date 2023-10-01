import NavBar from "./component/Navbar/NavBar";
import Homepage from "./pages/Homepage/Homepage";
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import WritePost from './pages/WritePost/WritePost'
import About from "./pages/About/About";
import SinglePostPage from "./pages/Single Post Page/SinglePostPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/writePost" element={<WritePost/>}/>
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
