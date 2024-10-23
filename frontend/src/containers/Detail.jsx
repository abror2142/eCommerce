import img1 from "../assets/beats2.jpg";
import img2 from "../assets/beats3.jpg";
import img3 from "../assets/beats4.jpg";
import img4 from "../assets/beats-blue.jpg";
import img5 from "../assets/beats-white.webp";
import img6 from "../assets/beats.png";
import img7 from "../assets/beatsnoisecancel.jpg";
import img8 from "../assets/beats5.webp";
import { useState } from "react";
import getUuid from "../utils/uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faHeart, faLock, faRepeat, faStar, faStarHalf, faTruck } from "@fortawesome/free-solid-svg-icons";

function Detail () {

    const images = [img1, img2, img3, img4, img5, img6, img7, img8]
    const imageIndex = useState(0)
    console.log(images.at(imageIndex))
    return (
        <div className="detail">
            <div className="detail-header">
                {/* Main Detail Content */}
                <div className="detail-header-left">
                    {/* Image */}
                    <div className="detail-image-box">
                        <div className="detail-image-option-box">
                            {
                                images.map((img) => {
                                    return (    
                                        <div 
                                            className={"detail-image-option"}
                                            key={getUuid()}
                                        >
                                            <img src={img} alt="Product Image Option" />
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="detail-main-image">
                            <img src={images.at(imageIndex)} alt="Main Image" />
                        </div>
                    </div>

                    <div className="detail-info-box">
                        <div>
                            <h2 className="detail-product-name">
                                Beats Studio Pro - Wireless Bluetooth 
                                Noise Cancelling Headphones - Personalized 
                                Spatial Audio, USB-C Lossless Audio, Apple & 
                                Android Compatibility, Up to 40 Hours Battery Life - Deep Brown
                            </h2>
                        </div>

                        <div className="detail-product-rating-box">
                            <div className="detail-product-rating-info">
                                <p className="detail-product-rating">4.9</p>
                                <div className="detail-product-stars">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalf} />
                                </div>
                                <div className="detail-product-rating-info">
                                    <p>120 ratings | 5 photos</p>
                                </div>
                            </div>
                            <p className="detail-product-sell">1000+ sold last month</p>
                        </div>
                        
                        <hr/>

                        <div className="detail-product-price-box">
                            <div className="detail-product-price-info">
                                <p className="detail-product-price-title">Price: </p>
                                <p className="detail-product-price">$290.00</p>
                                <p className="detail-product-old-price">$350.00</p>
                            </div>
                            <div className="detail-product-status">
                                <FontAwesomeIcon 
                                    icon={faFaceFrown}
                                    className="detail-product-status-icon"
                                />
                                <p className="detail-product-status-text">Currently Unavailable</p>
                            </div>
                        </div>

                        <div className="detail-product-option-box">
                            <div className="detail-product-current-option">
                                <p>Color:</p>
                                <p>Black</p>
                            </div>
                            
                            <div className="detail-product-options">
                                <div className="detail-product-option">
                                    <img src={img1} className="detail-product-option-image"/>
                                </div>
                                <div className="detail-product-option">
                                    <img src={img2} className="detail-product-option-image"/>
                                </div>
                                <div className="detail-product-option">
                                    <img src={img3} className="detail-product-option-image"/>
                                </div>
                                <div className="detail-product-option">
                                    <img src={img4} className="detail-product-option-image"/>
                                </div>
                                <div className="detail-product-option">
                                    <img src={img5} className="detail-product-option-image"/>
                                </div>
                            </div>
                        </div>

                        <div className="detail-product-option-box">
                            <div className="detail-product-current-option">
                                <p>Selected Size:</p>
                                <p>M</p>
                            </div>
                            
                            <div className="detail-product-options">
                                <div className="detail-product-option">
                                    <p>S</p>
                                </div>
                                <div className="detail-product-option">
                                    <p>M</p>
                                </div>
                                <div className="detail-product-option">
                                    <p>L</p>
                                </div>
                                <div className="detail-product-option">
                                    <p>X</p>
                                </div>
                                <div className="detail-product-option">
                                    <p>XL</p>
                                </div>
                            </div>
                        </div>

                        <div className="detail-product-option-box">
                            <div className="detail-product-current-option">
                                <p>Type:</p>
                                <p>Studio 3</p>
                            </div>

                            <div className="detail-product-options">
                                <div className="detail-product-option">
                                    <p>Studio 3</p>
                                </div>

                                <div className="detail-product-option">
                                    <p>Studio 3 Pro</p>
                                </div>

                                <div className="detail-product-option">
                                    <p>Studio 3 + charger</p>
                                </div>
                            </div>
                        </div>

                        <div className="detail-product-info-list">
                            <div className="detail-product-info-item">
                                <p>Brand:</p>
                                <p>Beats</p>
                            </div>
                            <div className="detail-product-info-item">
                                <p>Type:</p>
                                <p>Studio 3</p>
                            </div>
                            <div className="detail-product-info-item">
                                <p>Battery:</p>
                                <p>Built-in Lithium</p>
                            </div>
                            <div className="detail-product-info-item">
                                <p>Color:</p>
                                <p>Black</p>
                            </div>
                            <div className="detail-product-info-item">
                                <p>Noise Cacellation:</p>
                                <p>Active Noise Cancellation</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detail-product-action-box">
                    <div className="detail-total-price">
                        <p>
                            $290.00
                        </p>
                    </div>
                    
                    <div className="detail-product-amount">
                        <div className="detail-product-amount-title">Amount:</div>
                        <div className="amount-changer">
                            <div className="minus-btn">-</div>
                            <div className="product-amount">1</div>
                            <div className="plus-btn">+</div>
                        </div>
                    </div>

                    <div className="detail-product-cart-button">
                        <p>Add to Cart</p>
                    </div>

                    <div className="detail-product-buy-button">
                        <p>Buy Now</p>
                    </div>

                    <div className="detail-product-wish-button">
                        <FontAwesomeIcon icon={faHeart} />
                        <p>Add to WishList</p>
                    </div>

                    <div className="detail-product-promotions">
                        <div className="detail-promotion">
                            <FontAwesomeIcon icon={faTruck} />
                            <p>Worldwide Delivery</p>
                        </div>
                        <div className="detail-promotion">
                            <FontAwesomeIcon icon={faLock} />
                            <p>Secure payment</p>
                        </div>
                        <div className="detail-promotion">
                            <FontAwesomeIcon icon={faRepeat} />
                            <p>Free return in a week</p>
                        </div>
                    </div>
                </div>
                
            </div>
                

            <div className="detail-body">
                <div className="detail-body-about-product">
                    <div className="detail-body-about-product-header">
                        <div>
                            <p>Comments</p>
                        </div>
                        <div>
                            <p>About Product</p>
                        </div>
                        <div>
                            <p>About Sellet</p>
                        </div>
                    </div>

                    <div className="detail-product-comments">
                        
                    </div>

                    <div className="detail-product-characteristics">
                        <ul className="detail-product-characteristic-list">
                            <li className="detail-product-characteristic-item">
                                Includes Beats Studio Pro with Apple 20W USB-C Power Adapter
                            </li>
                            <li className="detail-product-characteristic-item">
                                Beats custom acoustic platform delivers rich, immersive 
                                sound whether you’re listening to music or taking calls.
                            </li>
                            <li className="detail-product-characteristic-item">
                                Lossless Audio via USB-C plus three distinct built-in 
                                sound profiles to enhance your listening experience
                            </li>
                            <li className="detail-product-characteristic-item">
                                Hear What You Want with two distinct listening modes: 
                                fully-adaptive Active Noise Cancelling (ANC) and Transparency mode
                            </li>
                            <li className="detail-product-characteristic-item">
                                Enhanced compatibility with one-touch pairing and a robust 
                                set of native Apple and Android features
                            </li>
                            <li className="detail-product-characteristic-item"> 
                                PERSONALIZED SPATIAL AUDIO with dynamic head tracking place 
                                you at the center of an immersive 360-degree listening experience
                            </li>
                        </ul>
                    </div>

                    <div className="detail-product-about-seller">
                        
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Detail