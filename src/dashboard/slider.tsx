import React from "react";
import "../css/Slider.css";

interface Slide {
    backgroundImage: string;
    content?: React.ReactNode;
    heading?: string;
    paragraph?: string;
}

const Slider: React.FC = () => {
    const slides: Slide[] = [
        {
            backgroundImage: "url('src/image/slider.jpg')",
            heading: "Gardening is a way to a healthy life",
            paragraph: "Your Paragraph",
        },
    ];

    return (
        <div
            className="slider-container"
            style={{
                backgroundImage: slides[0].backgroundImage,
            }}
        >
            <div className="content-container">


                    <div className="image-container">{slides[0].content}</div>

                    <h2 className="heading">{slides[0].heading}</h2>
                    <p className="paragraph">{slides[0].paragraph}</p>

            </div>
        </div>
    );
};

export default Slider;
