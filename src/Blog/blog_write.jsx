import React from 'react';
import { useState, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom'
import "./blog_main.css";

class Blog_write extends React.Component {

  render() {  
    
    return (     
      <div className='frame'>

        <h1> 게시글 작성 </h1>

        <input type="file" />
              {/*  style={{ display: "none" }}  */}

      </div>
  );
}
}
export default Blog_write;