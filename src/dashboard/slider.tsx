// Slider.tsx
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import "../css/Slider.css";

interface Slide {
    backgroundImage: string;
    content?: React.ReactNode;
    heading?: string;
    paragraph?: string;
}

const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const slides: Slide[] = [
        {
            backgroundImage: "url('src/images/SliderImage12.jpg')",
        },
        {
            backgroundImage: "url('src/images/SliderImage2.webp')",
        },
        {
            backgroundImage: "url('src/images/SliderImage4.jpg')",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div
            className="slider-container"
            style={{
                backgroundImage: slides[currentSlide].backgroundImage,
            }}
        >
            <div className="content-container">
                {/* left side */}
                <div className="left-side">
                    <div className="image-container">{slides[currentSlide].content}</div>
                </div>
                {/* right side */}
                <div className="right-side">
                    <h2 className="heading">{slides[currentSlide].heading}</h2>
                    <p className="paragraph">{slides[currentSlide].paragraph}</p>
                </div>
            </div>


            <div className="slider-navigation">
                <IoIosArrowBack onClick={prevSlide} className="slider-arrow left-arrow" />
                <IoIosArrowForward onClick={nextSlide} className="slider-arrow right-arrow" />
            </div>
        </div>
    );
};

export default Slider;
