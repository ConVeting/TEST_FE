import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import "./flex.css";

class Flex extends React.Component {
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

    return (     
      <div className='container'>
        <div className='item'><button id='123'
        onClick={move_talk_main}> 비대면 수의사 상담 </button></div>
        <div className='item'>ㅁ</div>
        <div className='item_long'>ㅇ</div>
        <div className='item'>ㅇ</div>
        <div className='item_long'>ㅇ</div>
      </div>
    );
  }
}
export default Flex;