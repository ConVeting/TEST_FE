import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
    const [id, setIdUser] = useState(''); //유저 id (중복 없게 할 예정)
    const [name_user, setNameUser] = useState(''); //유저 이름
    const [password, setPassword] = useState(''); //비밀번호
    const [message, setMessage] = useState('');  //메세지
    const [isIdAvailable, setIsIdAvailable] = useState(null);
    
    //id 중복 확인
    const checkIdAvailability = async (id) => {
        try {
            //서버에서 같은 id값 있으면 가져오기
            const response = await axios.get(`http://localhost:3001/users?id=${id}`);
            return response.data.length === 0; //값의 데이터 길이가 0이면 true 반환 (사용 가능)
        } catch (error) { //오류
            console.error('ID 중복 확인 중 오류 발생:', error);
            return false;
        }
    };
    
    //id 입력 필드 값이 변경될 때 호출
    const handleIdChange = async (e) => {
        const newId = e.target.value; //입력된 현재값 가져오기
        setIdUser(newId); //가져온 id값 상태에 저장
        if (newId) { //newID가 생기면
            const available = await checkIdAvailability(newId); //서버에 확인요청하고 기다리기
            setIsIdAvailable(available); //사용가능한 상태인지 저장(참 거짓으로)
        } else {
            setIsIdAvailable(null);
        }
    };
    //제출 시
    const handleSubmit = async (e) => {
        e.preventDefault(); //해당 이벤트 발생중에 변화 중지(새로고침 등)
        if (!isIdAvailable) {//만약 isIdAvailable이 거짓이면(중복되서 사용할 수 없으면)
          setMessage('사용할 수 없는 ID입니다. 다른 ID를 선택해주세요.'); //메세지 설정
          return;
        }
        try {
            //POST 요청으로 보내서 새 사용자를 등록
          const response = await axios.post('http://localhost:3001/users', {
            id,
            name_user,
            password
          });
          console.log('회원가입 성공:', response.data);
          setMessage('회원가입이 성공적으로 완료되었습니다!');
          // 완료 후 폼 초기화
          setIdUser('');
          setNameUser('');
          setPassword('');
          setIsIdAvailable(null);
        } catch (error) {
          console.error('회원가입 실패:', error);
          setMessage('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
        }
      };
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            {isIdAvailable === false && <p style={{color: 'red'}}>이미 사용 중인 ID입니다.</p>}
            {isIdAvailable === true && <p style={{color: 'green'}}>사용 가능한 ID입니다.</p>}
            <input
              type="text"
              value={id}
              onChange={handleIdChange}
              placeholder="아이디"
              required
            />
            <input
              type="text"
              value={name_user}
              onChange={(e) => setNameUser(e.target.value)}
              placeholder="사용자 이름"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              required
            />
            <button type="submit">회원가입</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      );
    };
    
    export default SignUpForm;


