import { useState } from 'react';
import defaultImage from './default-image.png'

function DinoCard({ dinos, filterOption }) {
  const [selectedDino, setSelectedDino] = useState(null)

  const filteredData = dinos.filter(dino => {
    switch (filterOption) {
      case 'carnivore':
        return dino.diet === 'carnivore';
      case 'herbivore':
        return dino.diet === 'herbivore';
      case 'omnivore':
        return dino.diet === 'omnivore';
      default:
        return true;
    }
  });

  const displayData = filteredData.sort((a, b) => a.name.localeCompare(b.name));

  const handleSelected = (index) => {
    setSelectedDino(prevSelected => (prevSelected === index ? null : index));
  }

  return (
    <>
    <strong>Click on the image for more information.</strong>
    <div className="card-container">
      {displayData.map((dino, index) => (
        <div className="card" key={dino.id}>
          <span className="header">
            <strong>{dino.name}</strong>
          </span>
          <div className="image">
            <img src={!dino.image ? defaultImage : dino.image} style={{ height: '100px' }} onClick={() => handleSelected(index)} />
          </div>
          {selectedDino === index && (
            <div>
              <p>{dino.timePeriod}</p>
              <p>{dino.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
    
  );
}

export default DinoCard;