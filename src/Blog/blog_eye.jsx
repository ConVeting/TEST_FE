import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import "./blog_main.css";

import Blog_header from './blog_header.jsx';

class Blog_eye extends React.Component {
    render() {  
      return (     
        <div className='frame'>
          <Blog_header />
          <h1> 강아지 안구 게시판 </h1>
        </div>
    );
  }
}
export default Blog_eye;