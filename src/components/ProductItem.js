import React from "react";
import ProductDate from "./ProductDate";
import Card from "./Card";
import './ProductItem.css'

const ProductItems = (props) =>{
    return (
        <Card className="product-items">
            <ProductDate date={props.date}/>
            <div className="product-item_description">
                <h2>{props.title}</h2>
            </div>
        </Card>
    );
}
export default ProductItems;