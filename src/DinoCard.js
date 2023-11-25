function DinoCard({ dinos, filterOption }) {

  const groupDinosByTimePeriod = dinos.reduce((result, dino) => {
  const timePeriod = dino.timePeriod;
  if (!result[timePeriod]) {
    result[timePeriod] = [];
  }
  result[timePeriod].push(dino);
  return result;
}, {});


  const filteredData = dinos.filter(dino => {
    switch (filterOption) {
      case 'carnivore':
        return dino.diet === 'Carnivore';
      case 'herbivore':
        return dino.diet === 'Herbivore';
      case 'omnivore':
        return dino.diet === 'Omnivore';
      default:
        return true;
    }
  });

  const displayData = filteredData.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="card-container">
      {displayData.map(dino => (
        <div className="card" key={dino.id}>
          <span className="header">
            <strong>{dino.name}</strong>
          </span>
          <div className="image">
            <img src={dino.image} style={{ height: '100px' }} alt={dino.name} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DinoCard;