import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import "./App.css";
import { useUser, UserProvider } from './User_Context';

import App_header from './app_header.jsx';
import App_footer from './app_footer.jsx';
import Home from './Home.jsx';
import Talk_main from './Talk/talk_main.jsx';
import LoginForm from './Jiwon_Login/Login_test.jsx';
import Blog_skin from './Blog/blog_skin.jsx';
import Blog_eye from './Blog/blog_eye.jsx';
import Blog_write from './Blog/blog_write.jsx';
import Ai_main from './Ai/ai_main.jsx';
import Info_pet from './Info/info_pet.jsx';
import Info_record from './Info/info_record.jsx';

class App extends React.Component {
  render() {
    return (
      <UserProvider>
        <div className='frame'>
          <App_header />
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Talk/talk_main' element={<Talk_main />} />
            <Route path='/Ai/ai_main' element={<Ai_main />} />
            <Route path='/Login/login' element={<LoginForm/>} />
            <Route path='/Blog/blog_skin' element={<Blog_skin />} />
            <Route path='/Blog/blog_eye' element={<Blog_eye />} />
            <Route path='/Blog/blog_write' element={<Blog_write />} />
            <Route path='/Info/info_pet' element={<Info_pet />} />
            <Route path='/Info/info_record' element={<Info_record />} />
          </Routes>
          <App_footer />
        </div>
      </UserProvider>
    );
  }
}
export default App;
