import React from "react";

const Property = props => {
    return (
    <div>
        <img className="photo" src={props.photo} alt={props.imageAltText}/>
        <span>{props.propertySpecs}</span>
        <span>{props.listPrice}</span>
        <span>{props.address}</span>
        <span>{props.listDate}</span>
    </div>
    )
};

export default Property;