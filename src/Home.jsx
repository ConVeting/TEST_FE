import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import "./App.css";
import"./flex.css";
import App_footer from './app_footer'
import Carousel from './Jiwon_compo/carousel';

export default function Home() {
  const navigate = useNavigate();

  const move_talk_main = () => {
    navigate('/Talk/talk_main');
  };

  const move_ai_main = () => {
    navigate('/Ai/ai_main');
  };

  const move_blog_skin = () => {
    navigate('/Blog/blog_skin');
  };

  return (     
    <div className='frame'>
      <div className='container'>
        <div className='item_long'>
          <button className='btn_move_section non_meet_consertbtn_img' onClick={move_talk_main}> 비대면 수의사 상담 </button>
        </div>
        <div className='item'>
          <button className='btn_move_section ai_healthcheckbtn_img' onClick={move_ai_main}> AI 건강 체크 </button>
        </div>
        <div className='item'>
          <button className='btn_move_section communitybtn_img' onClick={move_blog_skin}> 커뮤니티 </button>
        </div>
        <div className='item_long'>
          <Carousel/>
        </div>
        <div className='item_long'>
          캘린더가 들어갈 자리
        </div>
      </div>
    </div>
  );
}



        