import { useState } from "react"

function DinoForm() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [timePeriod, setTimePeriod] = useState('triassic')
  const [diet, setDiet] = useState('carnivore')
  const [image, setImage] = useState('')
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newDino = { 
      name,
      image,
      timePeriod,
      diet,
      description
    };

    setIsPending(true);

    fetch(`http://localhost:3000/dinosaurs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDino)
    }).then(() => {
      setIsPending(false)
    })
  }

return (
  <div className="form-container">
    <h2>Add a New Dino!</h2>
    <form onSubmit={handleSubmit}>
      <label>Dinosaur:</label>
      <input 
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
         />
      <label>Description:</label>
      <textarea 
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <label>Time Period:</label>
      <select
        value={timePeriod}
        onChange={(e) => setTimePeriod(e.target.value)}
      >
        <option value="triassic">Triassic</option>
        <option value="jurassic">Jurassic</option>
        <option value="cretaceous">Cretaceous</option>
      </select>
      <label>Diet:</label>
      <select
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
      >
        <option value="carnivore">Carnivore</option>
        <option value="herbivore">Herbivore</option>
        <option value="omnivore">Omnivore</option>
      </select>
      <label>Photo link:</label>
      <input 
        type="text" 
        required
        value={image}
        onChange={(e) => setImage(e.target.value)}
        />
      {!isPending && <button>Add Dino</button>}
      {isPending && <button disabled>Adding Dino...</button>}
    </form>
  </div>
)
}

export default DinoForm