import { useState, useEffect } from "react";
import DinoCard from "./DinoCard";
import DinoForm from './DinoForm'

function Dinosaurs() {
  const [filterOption, setFilterOption] = useState("name");
  const [dinos, setDinos] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/dinosaurs`)
      .then((res) => res.json())
      .then((data) => {
        setDinos(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleFilter = (option) => {
    setFilterOption(option);
  };

  const updateDinos = (newDino) => {
    setDinos([...dinos, newDino])
  }

  return (
    <div className="container">
      <div className="filter">
        <label htmlFor="select">
          <select
            name="select"
            value={filterOption}
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="carnivore">Carnivore</option>
            <option value="herbivore">Herbivore</option>
            <option value="omnivore">Omnivore</option>
          </select>
        </label>
      </div>
      <DinoCard dinos={dinos} filterOption={filterOption} />
      <DinoForm updateDinos={updateDinos}/>
    </div>
  );
}

export default Dinosaurs;
