import { useState, useEffect } from 'react'
import DinoForm from './DinoForm'
import DinoCard from './DinoCard'

function Dinosaurs() {
  const [dinos, setDinos] = useState([])
  const [filterOption, setFilterOption] = useState('name')

  useEffect(() => {
    fetch(`http://localhost:3000/dinosaurs`)
    .then(res => res.json())
    .then(data => {
      setDinos(data)
    })
    .catch(error => console.error(error))
  }, [])

  const handleFilter = (option) => {
    setFilterOption(option)
  }

  return(
    <div className="container">
      <DinoForm />
      <div className="filter">
        <label htmlFor="select">
          <select name="select" value={filterOption} onChange={(e) => handleFilter(e.target.value)}>
            <option value="name">Name</option>
            <option value="carnivore">Carnivore</option>
            <option value="herbivore">Herbivore</option>
            <option value="omnivore">Omnivore</option>
          </select>
        </label>
      </div>
      <DinoCard dinos={dinos} filterOption={filterOption}/>
    </div>
  )
}

export default Dinosaurs