import React from 'react';

// Komponent funkcyjny
const zad1 = ({ name, index, semester}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Indeks: {index}</p>
      <p>semestr: {semester}</p>
      <hr></hr>
    </div>
  );
}

export default zad1;
