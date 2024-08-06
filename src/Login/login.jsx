import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

import KakaoLogin from "react-kakao-login";

const rest_api_key = process.env.REACT_APP_RESTAPI_KEY; //REST API KEY
const redirect_uri = process.env.REACT_APP_REDIRECT_URI; //Redirect URI
// oauth 요청 URL
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`

const kakaoLogin = () => {
  window.Kakao.Auth.login({
    success() {
      window.Kakao.API.request({
        url: '/v2/user/me',
        // url: '/v2/user/scopes', 
        success(res) {
          alert(JSON.stringify(res));
          const kakaoAccount = res.kakao_account;
          console.log(kakaoAccount);
        },
        fail(error) {
          console.log(error);
        },
      });
    },
    fail(error) {
      console.log(error);
    },
  });
};

class Login extends React.Component {
  render() {
    
    // Sdk 초기화
    // 중복 초기화 방지를 위한 초기화 여부 확인
    const jsKey = "bc898497be66dafbf46f2ea3456e433a";

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(jsKey);
      console.log(window.Kakao.isInitialized());
    }

    const kakaoClientId = "bc898497be66dafbf46f2ea3456e433a";
    const kakaoOnSuccess = async (data)=>{
      	  console.log(data)
        const idToken = data.response.access_token  // 엑세스 토큰 백엔드로 전달
    }
    const kakaoOnFailure = (error) => {
      console.log(error);
    };

    const handleLogin = ()=>{
      window.location.href = kakaoURL
    }

    return (
        <Link to='/'>
            <div className='frame'> 
                <button onClick={handleLogin}>카카오 로그인</button> 

                <button onClick={kakaoLogin}> <img src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
                                                width="222"
                                                alt="카카오 로그인 버튼"/> </button>

                <KakaoLogin token={kakaoClientId}
                            onSuccess={kakaoOnSuccess}
                            onFail={kakaoOnFailure} />  
            </div>
        </Link>       
    )
  }
}
export default Login;
