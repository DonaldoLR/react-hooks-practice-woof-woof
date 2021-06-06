import React from 'react';

function DogNameSpan({ dog, selectDog }) {
  const displayMoreInfo = () => {
    selectDog(dog.id);
  };
  return <span onClick={displayMoreInfo}>{dog.name}</span>;
}

export default DogNameSpan;
