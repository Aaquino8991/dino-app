import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";

function App() {
  const [dinos, setDinos] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/dinosaurs`)
      .then((res) => res.json())
      .then((data) => {
        setDinos(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Outlet context={[dinos, setDinos]}/>
    </div>
  );
}

export default App;
