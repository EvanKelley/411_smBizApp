
import React from 'react';
import businesses from '../data/businesses';

const Listing = () => {
  return (
    <div>
      <h1>List of Small Businesses</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Address</th>
            <th>Operating Hours</th>
          </tr>
        </thead>
        <tbody>
          {businesses.map((business) => (
            <tr key={business.id}>
              <td>{business.name}</td>
              <td>{business.description}</td>
              <td>{business.address}</td>
              <td>{business.operatingHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listing;
