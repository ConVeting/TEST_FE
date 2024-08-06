import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';

class Blog_header extends React.Component {
    render() {  
      return (     
        <div className='frame'>
          블로그 헤더입니다
          <Link to='/Blog/Blog_skin'> Skin </Link>
          <Link to='/Blog/Blog_eye'> Eye </Link>
        </div>
    );
  }
  }
  export default Blog_header;