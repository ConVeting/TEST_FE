import React, { useEffect, useRef, useState } from 'react';
import './caurousel.css';

export default function Carousel() {
    const containerRef = useRef(null);
    const [now, setNow] = useState(1);
    const imgNum = 3;

    const moveContainer = (px) => {
        if (containerRef.current) {
            containerRef.current.style.transform = `translateX(${px}px)`;
        }
    };

    const handleButtonClick = (index) => {
        moveContainer(-330 * index);
        setNow(index + 1);
    };

    const rightClick = () => {
        if (now < imgNum) {
            moveContainer(-now * 330);
            setNow(now + 1);
        } else {
            moveContainer(0);
            setNow(1);
        }
    };

    const leftClick = () => {
        if (now > 1) {
            moveContainer(-(now - 2) * 330);
            setNow(now - 1);
        } else {
            moveContainer(-(imgNum - 1) * 330);
            setNow(imgNum);
        }
    };

    useEffect(() => {
        const interval = setInterval(rightClick, 2000);
        return () => clearInterval(interval);
    }, [now]);

    return (
        <div className="carousel_box">
            <div className="carousel">
                <div className="con_padding">
                    <div className="con_box">
                        <div className="carou_container" ref={containerRef}>
                            <div className="inner" id="inner_img_1">
                                <p>곰돌이는 '포근'</p>
                            </div>
                            <div className="inner" id="inner_img_2">
                                <p>고양이는 야옹~</p>
                            </div>
                            <div className="inner" id="inner_img_3">
                                <p>강아지는 멍멍!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pad">
                    <div className="button_con">
                        <button className="left_img" onClick={leftClick}>&lt;</button>
                        {[...Array(imgNum)].map((_, index) => (
                            <button className="but" key={index} onClick={() => handleButtonClick(index)}></button>
                        ))}
                        <button className="right_img" onClick={rightClick}>&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
