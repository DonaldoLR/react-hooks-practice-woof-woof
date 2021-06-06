import React from 'react';

const DogCard = ({ dog, onUpdateDog }) => {
  const { id, name, isGoodDog, image } = dog;
  function changeDogBehaviorStatus() {
    fetch(`http://localhost:3001/pups/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isGoodDog: !isGoodDog,
      }),
    })
      .then((r) => r.json())
      .then(onUpdateDog);
  }

  return (
    <div id='dog-summary-container'>
      <h1>DOGGO:</h1>
      {id === undefined ? null : (
        <div id='dog-info'>
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <button onClick={changeDogBehaviorStatus}>
            {isGoodDog ? 'Good' : 'Bad'} Dog!
          </button>
        </div>
      )}
    </div>
  );
};

export default DogCard;
