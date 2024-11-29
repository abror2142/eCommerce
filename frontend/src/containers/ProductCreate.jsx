import { useState } from "react";

import CategorySelector from "./CategorySelector";
import CompanyBrandSelector from "./BrandSelector";


function ProductCreate(){
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

                    <div className="category-selector-box product-create-field">
                        <div>
                            <h3>Please choose a valid Category</h3>
                        </div>
                        <CompanyBrandSelector />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCreate