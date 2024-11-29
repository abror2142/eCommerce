import { useState } from "react";

import CategorySelector from "./CategorySelector";


function ProductCreate(){
    const [category, setCategory] = useState([]); 

    function make_option(list){
        options = []
        list.forEach(element => {
            if(typeof(element) == "object"){
                options.push(make_option(element))
            }else {
                options.push(<option>{element}</option>)
            }
        });
    }

    return (
        <div className="product-create-page">
            <div className="header">
                <h1>Add your product!</h1>
            </div>
                
            <div className="product-create-form">
                <h2>Product General Info</h2>
                <div>
                    <div className="category-selector-box product-create-field">
                        <div>
                            <h3>Please choose a valid Category</h3>
                        </div>
                        <CategorySelector />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCreate