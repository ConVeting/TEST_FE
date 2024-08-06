import React, { useEffect, useRef, useState } from 'react';
import './carousel.css';

// 슬라이드 내용 데이터
const slidesData = [
    { id: 1, text: "곰돌이는 '포근'", img: "./img/bear.png" },
    { id: 2, text: "고양이는 '야옹'", img: "./img/cat.png" },
    { id: 3, text: "강아지는 '멍멍'", img: "./img/dog.png" }
];

//슬라이드 (슬라이드 내용 + 이미지)
const Slide = ({ children, img_id }) => (
    <div className="slide">
        <span>{children}</span>
        <div id={`slide_img_${img_id}`}></div>
    </div>
);

//캐러셀 버튼 - 슬라이드 넘기는 : 
const CarouselButtons = ({ imgNum, current, handleButtonClick }) => (
    <div className="button_con">
        {/* 슬라이드 개수(imgNum) 만큼 버튼 동적 생성 */}
        {[...Array(imgNum)].map((_, index) => (
            <button
                key={index}
                className={`carousel_but ${current === index + 1 ? 'active' : ''}`}
                onClick={() => handleButtonClick(index)}
            ></button>
        ))}
    </div>
);

export default function Carousel() {
    const containerRef = useRef(null);
    const [current, setCurrent] = useState(1);
    const imgNum = 4;

    //carou_container를 움직임 좌우로 이동하는 클래스
    const moveContainer = (percent) => {
        if (containerRef.current) {
            containerRef.current.style.transform = `translateX(${percent}%)`;
        }
    };

    //버튼 누르면 이동
    const handleButtonClick = (index) => {
        moveContainer(-(100 / imgNum) * index);
        setCurrent(index + 1);
    };

    const rightClick = () => {
        if (current < imgNum) {
            moveContainer(-current * (100 / imgNum));
            setCurrent(current + 1);
        } else {
            moveContainer(0);
            setCurrent(1);
        }
    };

    const leftClick = () => {
        if (current > 1) {
            moveContainer(-(current - 2) * 100 / imgNum);
            setCurrent(current - 1);
        } else {
            moveContainer(-(imgNum - 1) * 100 / imgNum);
            setCurrent(imgNum);
        }
    };

    useEffect(() => {
        const interval = setInterval(rightClick, 3000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="carousel_box">
            <div className="carousel">
                <div className="con_padding">
                    <div className="con_box">
                        <div className="carou_container" ref={containerRef} style={{ width: `${imgNum * 100}%`}}>
                            <Slide img_id={1}>곰돌이는 '포근'</Slide>
                            <Slide img_id={2}>고양이는 '야옹'</Slide>
                            <Slide img_id={3}>강아지는 '멍멍'</Slide>
                            <Slide img_id={3}>강아지는 '뭉뭉'</Slide>
                        </div>
                    </div>
                </div>
                <div className="pad">
                    <CarouselButtons imgNum={imgNum} current={current} handleButtonClick={handleButtonClick} />
                </div>
            </div>
        </div>
    );
}
