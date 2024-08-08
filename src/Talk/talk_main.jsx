// import React from 'react';
// import { useState, useRef } from "react";
// import { useNavigate, Link } from 'react-router-dom'
// // import "./blog_main.css";

// function Talk_main() {

//   return (     
//     <div className='frame'>

//       <h1> 수의사 리스트가 보일 화면 </h1>
//       {user.name_user}
//     </div>
//   );

// }
// export default Talk_main;

// import React from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useUser } from '../User_Context'; // UserContext에서 useUser 훅을 가져옵니다.
// // import "./blog_main.css";

// function Talk_main() {
//   const { user } = useUser(); // UserContext에서 user 객체를 가져옵니다.
//   const navigate = useNavigate();

//   // 사용자가 로그인하지 않은 경우 로그인 페이지로 리다이렉트
//   if (!user) {
//     navigate('/Home');
//     return null; // 리다이렉트 중에는 아무것도 렌더링하지 않습니다.
//   }

//   return (     
//     <div className='frame'>
//       <h1> 수의사 리스트가 보일 화면 </h1>
//       {user && user.name_user && <p>{user.name_user}</p>}
//     </div>
//   );
// }

// export default Talk_main;

import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../User_Context'; // UserContext에서 useUser 훅을 가져옵니다.
// import "./blog_main.css";

function Talk_main() {
  const { user } = useUser(); // UserContext에서 user 객체를 가져옵니다.
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/Home');
    }
  }, [user, navigate]);

  // 사용자가 로그인하지 않은 경우 아무것도 렌더링하지 않습니다.
  if (!user) {
    return null;
  }

  return (     
    <div className='frame'>
      <h1> 수의사 리스트가 보일 화면 </h1>
      {user.name_user && <p>{user.name_user}</p>}
    </div>
  );
}

export default Talk_main;

