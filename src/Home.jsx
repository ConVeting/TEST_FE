import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import "./App.css";
import"./flex.css";
import Carousel from './Jiwon_compo/caurousel';

class Home extends React.Component {
  render() {  

    function move_talk_main(){
      window.location.href = '/Talk/talk_main'
    }

    function move_ai_main(){
      window.location.href = '/Ai/ai_main'
    }

    function move_blog_skin(){
      window.location.href = '/Blog/blog_skin'
    }

    function move_flex(){
      window.location.href = '/flex'
    }

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
            <h1> 광고 배너가 보일 부분 </h1>
            {/* <Carousel/> */}
          </div>
          <div className='item_long'>
            <button onClick={move_flex}> flex 테스트 </button>
          </div>
       </div>
      </div>
    );
  }
}
export default Home;

        