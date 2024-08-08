import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import "./App.css";
import"./flex.css";
import Carousel from './Jiwon_compo/carousel';
import { useNavigationHandlers } from './Navigate';
//회원가입, 로그인 test
import SignUpForm from './Jiwon_Login/Sign_up';
import LoginForm from './Jiwon_Login/Login_test';
import UserProfile from './Jiwon_Login/UserProfile';
//로그인 한번에 관리
import { useUser } from './User_Context';
import CalendarApp from './Test';

export default function Home() {
  const { move_talk_main, move_ai_main, move_blog_skin } = useNavigationHandlers();

  const { user, login, logout } = useUser();

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
          {/* <CalendarApp/> */}
          캘린더가 들어갈 자리
          {user ? (
            <UserProfile/>
          ) : (
            <div>
              <SignUpForm />
              <LoginForm/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



        