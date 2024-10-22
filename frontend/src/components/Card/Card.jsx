import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../../assets/beats-blue.jpg";
import img2 from "../../assets/beats2.jpg";
import img3 from "../../assets/beats4.jpg";
import img4 from "../../assets/beatsnoisecancel.jpg";
import { faBagShopping, faCartShopping, faComment, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


function Card() {
    const images = [img1, img2, img3, img4]

    const [image, setImage] = useState([images[0], 1])
    const [focus, setFocus] = useState(false)

    function changePhoto(){
        if(image[1] == images.length)
            setImage([images[0], 1])
        else {
            let ind = image[1]
            setImage([images.at(ind), ind+1])
        }
    }

    useEffect( () => {
        if(focus){
            const timer = setInterval(changePhoto, 2000)
            return () => clearInterval(timer)
        }
    }, [image, focus])
  
    return (
        <div className="card"
            onMouseOver={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
        >

            <div className="card-header">
                <img 
                    className="card-image-box"
                    src={image[0]}
                />
                <div className="card-heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
            </div>
            
            <div className="card-body">
                <div className="brand-price">
                    <div>
                        <p>$325.00</p>
                    </div>

                    <p className="product-brand">
                        Beats
                    </p>
                    
                </div>

                <div>
                    <p className="product-name">Beats Studio 3</p>
                </div>

                <div>
                    <p className="product-description">
                        Beats is one of the most popular and trusted 
                        company that produces a range of products.
                        Beats Studio 3 is one of them!
                    </p>
                </div>

                <div className="product-statistics">
                    <div className="product-rating">
                        <FontAwesomeIcon icon={faStar} />
                        <p>
                            4.9
                        </p>
                    </div>
                    <div className="product-comment">
                        <FontAwesomeIcon icon={faComment} />
                        <p>
                            1.3k Comments
                        </p>
                    </div>
                </div>

                

            </div>

            <div className="card-button-box">
                <div className="card-button cart-button">             
                    <p>
                        Add to Cart
                    </p>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>

                <div className="card-button buy-button">
                        <p>
                            Buy Now!
                        </p>
                        <FontAwesomeIcon icon={faBagShopping} />
                </div>
            </div>
        </div>
    )
}

export default Card