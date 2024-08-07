import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import "./App.css";
import "./app_footer.css";
import { useNavigationHandlers } from './Navigate';

export default function App_footer(){
    // const navigate = useNavigate();
    // const move_talk_main = () => {
    //     navigate('/Talk/talk_main');
    // };

    // const move_ai_main = () => {
    //     navigate('/Ai/ai_main');
    // };

    // const move_blog_skin = () => {
    //     navigate('/Blog/blog_skin');
    // };
    // const move_home = () => {
    //     navigate('/Home');
    // };

    // const move_mypage = () => {
    //     navigate('/Info/info_pet');
    // };
    const { move_talk_main, move_ai_main, move_blog_skin, move_home, move_mypage } = useNavigationHandlers();
    return (
    <div className='frame'>
        <div className='footer'>
        <button className='nav_move_section' onClick={move_ai_main}> AI Check </button>
        <button className='nav_move_section' onClick={move_blog_skin}> Community </button>
        <button className='nav_move_section' onClick={move_home}> Home </button>
        <button className='nav_move_section' onClick={move_talk_main}> History </button>
        <button className='nav_move_section' onClick={move_mypage}> My Page </button>
        </div>      
    </div>
    );
    
}

  