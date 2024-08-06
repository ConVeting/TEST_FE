import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import "./App.css";
import "./app_footer.css";

class App_footer extends React.Component {
    render() {
        return (
        <div className='frame'>
            <div className='footer'>
                <Link to='/Home'> 홈 </Link>
                <Link to='/Ai/ai_main'> AI 건강 체크 </Link>
                <Link to='/Blog/blog_skin'> 게시판 </Link>
                <Link to='/Info/info_pet'> 마이페이지 </Link>
            </div>      
        </div>
        );
    }
}
export default App_footer;
  