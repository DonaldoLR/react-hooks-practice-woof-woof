import React, { useState, useEffect } from 'react';
import DogNameContainer from './DogNameContainer';
import DogCard from './DogCard';
function App() {
  const [goodDogFilter, setGoodDogFilter] = useState(false);
  const [dogs, setDogs] = useState([]);
  const [selectedDogId, setSelectedDogId] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/pups`)
      .then((r) => r.json())
      .then(setDogs);
  }, []);

  function changeDogFilter() {
    setGoodDogFilter((goodDogFilter) => !goodDogFilter);
  }

  function onUpdateDog(updatedDog) {
    const updatedDogs = dogs.map((dog) =>
      dog.id === updatedDog.id ? updatedDog : dog
    );
    setDogs(updatedDogs);
  }

  let visibleDogs = dogs;
  if (goodDogFilter) {
    visibleDogs = visibleDogs.filter((dog) => dog.isGoodDog);
  }
  // const visibleDogs = dogs.filter((dog) => {
  //   if (goodDogFilter) {
  //     if (dog.isGoodDog) return true;
  //     return false;
  //   }
  //   return true;
  // });
  const selectedDog = dogs.find((dog) => dog.id === selectedDogId);
  return (
    <div className='App'>
      <div id='filter-div'>
        <button id='good-dog-filter' onClick={changeDogFilter}>
          Filter good dogs: {goodDogFilter ? 'ON' : 'OFF'}
        </button>
      </div>
      <DogNameContainer dogs={visibleDogs} selectDog={setSelectedDogId} />
      <DogCard dog={selectedDog} onUpdateDog={onUpdateDog} />
    </div>
  );
}

export default App;
