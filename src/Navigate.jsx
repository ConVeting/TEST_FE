import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';

export function useNavigationHandlers() {
    // 나비게이트 간결화
    const navigate = useNavigate();

    //footer 링크들
    const move_talk_main = () => navigate('/Talk/talk_main');
    const move_ai_main = () => navigate('/Ai/ai_main');
    const move_blog_skin = () => navigate('/Blog/blog_skin');
    const move_home = () => navigate('/Home');
    const move_mypage = () => navigate('/Info/info_pet');
    //로그인, 회원가입
    const move_login = () => navigate('/Login/login');
    const move_signup = () => navigate('/Login/signup');

    return { move_talk_main, move_ai_main, move_blog_skin, move_home, move_mypage, move_login, move_signup };
}
