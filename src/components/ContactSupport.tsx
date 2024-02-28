import React from 'react';
import "../css/App.css";
import Navbar from "./navbar.tsx";

const ContactSupport: React.FC = () => {
    return (
        <>
        <Navbar />
        <div className="contact-support-container">
            <h2>Contact Customer Support</h2>
            <p>
                If you have questions or feedback about an order or Flora Hub, here’s how to get in touch.
            </p>
            <p>
                Note: Our support team is currently experiencing high ticket volume, so it may take up to 72 hours to receive a response.
                We appreciate your understanding and look forward to assisting you as soon as we can.
            </p>
            <div className="contact-info">
                <p>Email: <a href="mailto:florahub@gmail.com">florahub@gmail.com</a></p>
                <p>Phone: 987087550</p>
            </div>
        </div>
        </>
    );
};

export default ContactSupport;
