import React from 'react';
import './button_submit.css'
import { useNavigationHandlers } from '../../Navigate';
import { useUser } from '../../User_Context'; 

// 제출 버튼
const Button_submit = ({text}) => {
  return (
    <button className="btn_login_submit" type="submit">{text}</button>
  );
};

//로그인으로 이동하는 버튼
const Button_Login = () => {
  const {  move_login } = useNavigationHandlers();
  return (
    <button className="btn_login" onClick={move_login}>Login</button>
  )
}

//회원가입으로 이동하는 버튼
const Button_Signup = () => {
  const { move_signup  } = useNavigationHandlers();
  return (
    <button className="btn_login" onClick={move_signup}>Sign Up</button>
  )
}

//로그아웃하고 home으로 이동하는 버튼
const Button_Logout = () => {
  const { user, logout } = useUser();
  const {  move_home  } = useNavigationHandlers();
    //동시에 호출하기 위함
  function handleLogoutAndMoveHome() {
    logout(); // 로그아웃 함수 호출
    move_home(); // 홈으로 이동하는 함수 호출
  }
  return (
    <button className="btn_login" onClick={handleLogoutAndMoveHome }>Logout</button>
  )
}

const Button_Loginstate = () => {
  const { user, logout } = useUser();
  const {  move_mypage  } = useNavigationHandlers();

  return(
    <div>
      {user ? (
          <div className='header_profile'>
            <div className='header_profile_username' onClick={move_mypage}>{user.name_user}</div>
            <button></button>
            <Button_Logout/>
          </div>
          ) : (
            <Button_Login/>
          )}
    </div>
  )
}
export { Button_submit, Button_Login, Button_Signup, Button_Logout, Button_Loginstate };
