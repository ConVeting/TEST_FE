import React, { useEffect, useRef, useState } from 'react';
import './caurousel.css';

export default function Carousel() {
    const containerRef = useRef(null);
    const [now, setNow] = useState(1);
    const imgNum = 3;

    const moveContainer = (percent) => {
        if (containerRef.current) {
            containerRef.current.style.transform = `translateX(${percent}%)`;
        }
    };

    const handleButtonClick = (index) => {
        moveContainer(-100 / imgNum * index);
        setNow(index + 100 / imgNum);
    };

    const rightClick = () => {
        if (now < imgNum) {
            moveContainer(-now * 100 / imgNum);
            setNow(now + 1);
        } else {
            moveContainer(0);
            setNow(1);
        }
    };

    const leftClick = () => {
        if (now > 1) {
            moveContainer(-(now - 2) * 100);
            setNow(now - 1);
        } else {
            moveContainer(-(imgNum - 1) * 100);
            setNow(imgNum);
        }
    };

    useEffect(() => {
        const interval = setInterval(rightClick, 1000);
        return () => clearInterval(interval);
    }, [now]);

    return (
        <div className="carousel_box">
            <div className="carousel">
                <div className="con_padding">
                    <div className="con_box">
                        <div className="carou_container" ref={containerRef}>
                            <div className="inner">
                                <span>곰돌이는 '포근'</span>
                                <div id="inner_img_1"></div>
                            </div>
                            <div className="inner">
                                <span>고양이는 '야옹'</span>
                                <div id="inner_img_2"></div>
                            </div>
                            <div className="inner">
                                <span>강아지는 '멍멍'</span>
                                <div id="inner_img_2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pad">
                    <div className="button_con">
                        {/* <button className="left_img" onClick={leftClick}>&lt;</button> */}
                        {[...Array(imgNum)].map((_, index) => (
                            <button className="but" key={index} onClick={() => handleButtonClick(index)}></button>
                        ))}
                        {/* <button className="right_img" onClick={rightClick}>&gt;</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
