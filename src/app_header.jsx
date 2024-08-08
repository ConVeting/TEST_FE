import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import "./App.css";
import { useUser } from './User_Context';
import Logo from './Image/Logo.png'
import { Button_Loginstate } from './Jiwon_compo/Form_compo/button_submit';
export default function App_header(){
  return (
    <div className='frame'>
      <img src={Logo} alt="컨벳팅" 
        style={{
          maxWidth: '100px', 
          width: '25%',
          height: 'auto' // 비율 유지
        }} 
      />
      <Button_Loginstate/>
      
    </div>
  );
}
  