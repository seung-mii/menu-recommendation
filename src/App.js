import React from 'react';
import Home from './Pages/Home/home';
import Header from './Pages/Home/header';
import Modify from './Pages/Member/modify';
import Signin from './Pages/Member/signin';
import Signup from './Pages/Member/signup';
import Post from './Pages/Post/post';
import PostRegist from './Pages/Post/postRegist';
import PostModify from './Pages/Post/postModify';
import Regist from './Pages/Resturant/regist';
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
        <Route path="/regist" element={<Regist />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

