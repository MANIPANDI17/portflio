import React from 'react';

const UserCard = ({ name, email }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
