import React, { useState, useEffect } from "react";
import axios from "axios";
import Property from "../components/Property"

const PropertyListingsView = () => {
  const [propertyListings, setPropertyListings] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProperties = () => {
    setLoading(true);

    axios.get("https://api.simplyrets.com/properties?status=Active&type=residential&count=true", 
    { headers: { Authorization: "Basic " + btoa("simplyrets:simplyrets")}})
    .then(response => {
      console.log(response.data)
      setPropertyListings(response.data)
      setLoading(false)
    }).catch((error) => {
      console.error(error);
      setLoading(false);
    });
    }

useEffect (() => {
    console.log("hello")
    getProperties();
}, []);

const getFormattedDate = (dateString) => {
    var date = new Date(dateString);

    var year = date.getFullYear().toString().substr(-2);

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '/' + day + '/' + year;
}

const getFormattedListPrice = (price) => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0, 
        minimumFractionDigits: 0,
        });
        
    return formatter.format(price);
}

const property = propertyListings?.map((listing) => {
    const property  = listing.property;
    const address = listing.address;
    
    const bathrooms = property.bathsFull + (listing.property.bathsHalf /2)

    const propertySpecsString = `${property.bedrooms} BR | ${bathrooms} Bath | ${property.area} Sq Ft`

    const date = getFormattedDate(listing.listDate);

    const listPrice = getFormattedListPrice(listing.listPrice)

    return (
        <Property
            key={listing.listingId}
            photo={listing.photos[0]}
            imageAltText={`An image of the property at ${address.full}`}
            address= {address.full}
            propertySpecs={propertySpecsString}
            listPrice={listPrice}
            listDate={date}
        />
    );
    });

  return (
    <>
      {loading ? (
        <div>Loading.....</div>
      ) : (
        <div>
            {property}
        </div>
      )}
    </>
  );
}

export default PropertyListingsView;