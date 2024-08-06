import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import Info_header from './info_header.jsx';
// import "./blog_main.css";



class Info_record extends React.Component {
  render() {  
    return (     
      <div className='frame'>
        <Info_header />
        <h1> 기록 페이지 </h1>

      </div>
  );
}
}
export default Info_record;