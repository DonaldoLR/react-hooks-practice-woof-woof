import React from 'react';
import DogNameSpan from './DogNameSpan';
function DogNameContainer({ dogs, selectDog }) {
  const renderedDogNames = dogs.map((dog) => {
    return <DogNameSpan key={dog.id} dog={dog} selectDog={selectDog} />;
  });
  return <div id='dog-bar'>{renderedDogNames}</div>;
}

export default DogNameContainer;
