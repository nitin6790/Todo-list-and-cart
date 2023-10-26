import React from 'react';

const DynamicContent = ({ name, age, occupation = 'Unemployed' }) => {
  return (
    <div>
        <h1>Dynamic Content Rendering</h1>
      <h2>Personal Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
};

export default DynamicContent;

