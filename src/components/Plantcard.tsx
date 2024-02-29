import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useCart } from './CartContext.tsx';

import '../css/plantcard.css';

const Plantcard = ({ plant, headline }: { plant: any[] | null; headline: string }) => {
    const [visibleplant, setVisibleplant] = useState(3);
    const [seeMoreClicked, setSeeMoreClicked] = useState(false);
    const { addToCart } = useCart();

    const handleSeeMore = () => {
        setVisibleplant((prevVisibleplant) => prevVisibleplant + 3);
        setSeeMoreClicked(true);
    };

    const handleGoBack = () => {
        setVisibleplant(3);
        setSeeMoreClicked(false);
    };

    const handleAddToCart = (plantItem: any) => {
        const cartItem = {
            id: plantItem.id,
            imageurl: plantItem.imageurl,
            plantname: plantItem.plantname,
            price: plantItem.price,
            quantity: 1,
        };

        addToCart(cartItem);

    };

    return (
        <div className="plantcards-container">
            <h2 className="plantcards-headline">{headline}</h2>
            {plant && visibleplant < plant.length && (
                <button onClick={handleSeeMore} className="see-more-button">
                    See More
                </button>
            )}
            {seeMoreClicked && (
                <Link to="/" className="back-icon" onClick={handleGoBack}>
                    <IoArrowBackOutline />
                </Link>
            )}
            <div className="plantitem-container">
                {Array.isArray(plant) && plant.length > 0 ? (
                    <>
                        {plant.slice(0, visibleplant).map((plantItem) => (
                            <div key={plantItem.id} className="plant-item">
                                <Link to={`/planting/${plantItem.id}`} className="link">
                                    <div className="plant-image">
                                        <img src={plantItem.imageurl} alt="" className="plant-image__img" />
                                    </div>
                                    <div className="plant-info">
                                        <h2 className="plant-title">{plantItem.plantname}</h2>
                                        <p className="plant-category">{plantItem.category}</p>
                                        <p className="plant-price">Rs:{plantItem.price}</p>

                                    </div>
                                </Link>
                                <div className="plant-actions">
                                <button
                                    onClick={() => handleAddToCart(plantItem)}
                                    className="add-to-cart-button"
                                >
                                    Add to Cart
                                </button>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No plant available.</p>
                )}
            </div>
        </div>
    );
};

export default Plantcard;
