import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

class Info_header extends React.Component {
    render() {  
      return (     
        <div className='frame'>
          마이페이지 헤더입니다
          <Link to='/Info/Info_pet'> Pet </Link>
          <Link to='/Info/Info_record'> Record </Link>
        </div>
    );
  }
  }
  export default Info_header;