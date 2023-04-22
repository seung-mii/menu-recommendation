import React from 'react';
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Header';
import Modify from './Pages/Member/Modify';
import Signin from './Pages/Member/Signin';
import Signup from './Pages/Member/Signup';
import Post from './Pages/Post/Post';
import PostRegist from './Pages/Post/PostRegist';
import PostModify from './Pages/Post/PostModify';
import Star from './Pages/Star/Star';
import StarModify from './Pages/Star/StarModify';
import Regist from './Pages/Resturant/Regist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/modify" element={<Modify />}></Route>
        <Route path="/login" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/post/:id" element={<PostRegist />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/postmodify/:id" element={<PostModify />}></Route>
        <Route path="/star/:id" element={<Star />}></Route>
        <Route path="/starmodify/:id" element={<StarModify />}></Route>
        <Route path="/regist" element={<Regist />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

