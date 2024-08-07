import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';

export function useNavigationHandlers() {
    const navigate = useNavigate();

    const move_talk_main = () => navigate('/Talk/talk_main');
    const move_ai_main = () => navigate('/Ai/ai_main');
    const move_blog_skin = () => navigate('/Blog/blog_skin');
    const move_home = () => navigate('/Home');
    const move_mypage = () => navigate('/Info/info_pet');

    return { move_talk_main, move_ai_main, move_blog_skin, move_home, move_mypage };
}

  