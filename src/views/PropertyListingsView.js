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

    const property = propertyListings?.map((listing) => {
        return (
            <Property
                key={listing.listingId}
                photo={listing.photo[0]}
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