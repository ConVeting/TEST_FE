import React, { useEffect, useRef, useState } from 'react';
import './carousel.css';

// 슬라이드 내용 데이터
const slidesData = [
    { id: 1, title: "곰돌이는 '포근'", text: "강아지는 '멍멍'", linktext: "강아지는 '멍멍'", img: "/img/bear.png" },
    { id: 2, title: "고양이는 '야옹'", text: "강아지는 '멍멍'", linktext: "강아지는 '멍멍'", img: "/img/cat.png" },
    { id: 3, title: "강아지는 '멍멍'", text: "강아지는 '멍멍'", linktext: "강아지는 '멍멍'", img: "/img/dog.png" }
];

//슬라이드 (슬라이드 내용 + 이미지)
const Slide = ({ children, img }) => (
    <div className="slide">
        {children}
        <div style={{ backgroundImage: `url(${img})` }} className="slide_img"></div>
    </div>
);

//슬라이드 넘길 수 있는 버튼, 활성화 시 active 클래스 부여 및 길이 변화
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
    //현재 활성화된 슬라이드 번호
    const [current, setCurrent] = useState(1);
    //슬라이드 데이터 개수(길이만큼)
    const imgNum = slidesData.length;

    //carousel_container를 움직임 좌우로 이동하는 클래스
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

    //슬라이드 오른쪽으로 한칸 이동(마지막 슬라이드 시 맨앞으로 가기)
    const rightClick = () => {
        if (current < imgNum) {
            moveContainer(-current * (100 / imgNum));
            setCurrent(current + 1);
        } else {
            moveContainer(0);
            setCurrent(1);
        }
    };
    // 왼쪽버튼(왼쪽 슬라이드로 이동)
    // const leftClick = () => {
    //     if (current > 1) {
    //         moveContainer(-(current - 2) * 100 / imgNum);
    //         setCurrent(current - 1);
    //     } else {
    //         moveContainer(-(imgNum - 1) * 100 / imgNum);
    //         setCurrent(imgNum);
    //     }
    // };

    useEffect(() => {
        const interval = setInterval(rightClick, 3000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="carousel_box">
            {/* 보여주는 부분 (넘치는 부분 hidden) */}
            <div className="carousel_content">
                {/* 슬라이드 나열 */}
                <div className="carousel_container" ref={containerRef} style={{ width: `${imgNum * 100}%`}}>
                    {slidesData.map(slide => (
                        <Slide key={slide.id} img={slide.img}>
                            {slide.title} <br/>
                            {slide.text} <br/>
                            {slide.linktext} <br/>
                        </Slide>
                    ))}
                </div>
            </div>
            <div className="pad">
                <CarouselButtons imgNum={imgNum} current={current} handleButtonClick={handleButtonClick} />
            </div>
        </div>
    );
}
