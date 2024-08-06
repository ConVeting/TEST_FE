import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
// import "./blog_main.css";

import Info_header from './info_header.jsx';

class Info_pet extends React.Component {
  render() {  
    return (     
      <div className='frame'>
        <Info_header />
        <h1> 펫 페이지 </h1>

      </div>
  );
}
}
export default Info_pet;