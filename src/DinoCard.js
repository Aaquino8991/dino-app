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

  return (
    <div className="card-container">
      {displayData.map(dino => (
        <div className="card" key={dino.id}>
          <span className="header">
            <strong>{dino.name}</strong>
          </span>
          <div className="image">
            <img src={dino.image} style={{ height: '100px' }} alt={dino.name} />
            <p>Time period: {dino.timePeriod}</p>
            <p>Description: {dino.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DinoCard;