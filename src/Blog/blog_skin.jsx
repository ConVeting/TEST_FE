import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import "./blog_skin.css";

import Blog_eye from './blog_eye.jsx';
import Blog_header from './blog_header.jsx';

class Blog_skin extends React.Component {
  render() {  
    function move_blog_write(){
      window.location.href = '/Blog/blog_write'
    }

    return (     
      <div className='frfr'>
        <Blog_header />
        <button onClick={move_blog_write}> 게시글 작성 </button>
        <h1> 강아지 피부 게시판 </h1>       
      </div>
  );
}
}
export default Blog_skin;