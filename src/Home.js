import { useState, useEffect } from 'react'
import DinoCard from './DinoCard'

function Home() {
  const [dinosaurs, setDinosaurs] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/dinosaurs")
    .then(res => res.json())
    .then(data => setDinosaurs(data))
    .catch(error => console.error(error))
  }, [])

  const dinoList = dinosaurs.map(dino => {
    return <DinoCard dino={dino} key={dino.id} />
  })

  return (
    <div className='container'>
      {dinoList}
    </div>
  )
}

export default Home