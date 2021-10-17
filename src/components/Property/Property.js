import React from "react";
import "./Property.css"

const Property = props => {
    return (
    <div className="property-card">
        <img src={props.photo} alt={props.imageAltText}/>
        <span className="property-card-specs">{props.propertySpecs}</span>
        <span className="property-card-list-price">{props.listPrice}</span>
        <span className="property-card-address">{props.address}</span>
        <span className="property-card-list-date">{props.listDate}</span>
    </div>
    )
};

export default Property;