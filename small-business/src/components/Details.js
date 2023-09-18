import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({ businessList }) => {
  const { id } = useParams();

  // Find the selected business by itsID
  const selectedBusiness = businessList.find((business) => business.id === parseInt(id, 10));

  if (!selectedBusiness) {
    return <div>Business not found.</div>;
  }

  // Rendesr the details
  return (
    <div>
      <h1>{selectedBusiness.name}</h1>
      <p>Description: {selectedBusiness.description}</p>
      <p>Address: {selectedBusiness.address}</p>
      <p>Operating Hours: {selectedBusiness.operatingHours}</p>
    </div>
  );
};

export default Details;

