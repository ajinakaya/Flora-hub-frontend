import React from "react";

import { PiPlantBold } from "react-icons/pi";
import { PiPottedPlantDuotone } from "react-icons/pi";
import "../css/About.css";
import Navbar from "./navbar.tsx";

const AboutUs: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="main-aboutUs-div">
                <div className="aboutUs-main">
                    <h4 className="aboutUs-first-heading">
                        Everyone should live with a little more green.
                    </h4>

                    <p>
                        FloraHub is here to help strengthen your relationship with plants.
                        We make buying plants easy by delivering healthy, ready-to-go plants to your door and setting you up with the tips and
                        tricks you need to help your plants thrive. Plants make life better. We make plants easy.
                    </p>

                    <h4>Direct From the Greenhouse</h4>
                    <p>

                            When you buy a houseplant from a box store or nursery, it probably spends an average of four weeks traveling from a greenhouse
                            to a drafty warehouse on a hot or cold truck. Then, it’s shipped to a store where it likely isn’t getting the water,
                            light, or care it needs to thrive. With Bloomscape, our plants are cared for by plant experts
                            and kept in optimal conditions at our greenhouse where
                            they’re shipped directly to you. So instead of your plant spending 4 weeks in an uncontrolled environment,
                            it spends 3-4 days going from our greenhouse to your front door. This means your plants arrive healthy and already thriving.

                    </p>

                </div>


                <div className="main-ourServices">
                    <div className="service-icon">
                        <PiPottedPlantDuotone />
                    </div>
                    <div>
                        <h5>Shipped to Your Door</h5>
                        <p>
                            Our plants are shipped with care and experience. We’ve learned how to keep plants at the right temperature, protect their roots,
                            and keep them healthy while they travel from our greenhouse to your home. Our innovative packaging holds
                            plants securely in place, preventing damage and decreasing soil spillage.
                            Most shipments will arrive in under a week and all plants will be healthy, undamaged, and ready for you to enjoy.
                        </p>
                    </div>
                </div>

                <div className="main-ourServices">
                    <div className="service-icon">
                        <PiPlantBold />
                    </div>
                    <div>
                        <h5>All the Guidance</h5>
                        <p>
                            Our expertise doesn’t stop once your plant leaves our greenhouse. We are here to help you with any and all of your plant care questions.
                            From simple, customized care instructions included with your plant to real-time expert support, we want to make plant care easy.
                            Feel free to email, chat, or tweet us any question you have — the Grow-How® Team is standing by and ready to help!
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AboutUs;
