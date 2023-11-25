function DinoCard({ dinos, filterOption }) {
  const displayData = dinos.slice().sort((a, b) => {
    switch (filterOption) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'carnivore':
        return a.carnivore.localeCompare(b.carnivore)
      default:
        return 0;
    }
  });

  return (
    <div className="card-container">
      {displayData.map(dino => (
        <div className="card" key={dino.id}>
          <span className="header">
            <strong>{dino.name}</strong>
          </span>
          <div className="image">
            <img src={dino.image} style={{ height:'100px'}}/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DinoCard