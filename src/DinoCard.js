function DinoCard({ dino }) {
return (
  <div className="dino-card">
    <img src={dino.image} />
    <ul>
      <li><strong>Name:</strong> {dino.name}</li>
      <li><strong>Time Period:</strong> {dino.timePeriod}</li>
      <li><strong>Description:</strong> {dino.description}</li>
    </ul>
  </div>
  
)
}

export default DinoCard