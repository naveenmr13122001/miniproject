import './App.css';
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Questions_page  from './Components/Pages/Question';
import Tags from './Components/Pages/Tags'
import React from "react";
import Ask_your_query  from './Components/Pages/Ask_your_query';
import Article from './Components/Pages/Article';
import Add_Artical from './Components/Pages/Add_Article';
import Add_tags from  './Components/Pages/Add_tags'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path="/question" element={<Questions_page/>}/>
        <Route exact path='/tags' element={<Tags/>}/>
        <Route exact path='/ask_your_query' element={<Ask_your_query/>}/>
        <Route exact path="/article" element={<Article/>}/>
        <Route exact path="/add_artical" element={<Add_Artical/>}/>
        <Route exact path="/add_tags" element={<Add_tags/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
