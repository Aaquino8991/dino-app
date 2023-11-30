import { useState, useEffect } from "react";
import DinoCard from "./DinoCard";
import { useOutletContext } from "react-router-dom";
import DinoForm from './DinoForm'

function Dinosaurs() {
  const [dinos, setDinos] = useOutletContext();
  const [filterOption, setFilterOption] = useState("name");

  const handleFilter = (option) => {
    setFilterOption(option);
  };

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
      <DinoForm />
    </div>
  );
}

export default Dinosaurs;
