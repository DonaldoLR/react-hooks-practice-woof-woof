import React from "react";

const DogNameSpan = ({ dog, selectDog }) => {
  const displayMoreInfo = () => {
    selectDog(dog);
  };
  return <span onClick={displayMoreInfo}>{dog.name}</span>;
};

export default DogNameSpan;
