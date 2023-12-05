# Dino app

Dino app is made for kids who love dinosaurs. They can filter through different types of dinosaurs, look up their favorite dinosaur and find out more about it. They can also add more dinosaurs as they discover more and more of this amazing world!

## Installation

No installation required.

## Usage

- Adding a new Dino

```React
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
      updateDinos(newDino)
    })
  }
```

- Sorting Dinos

```React
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
```

- Selecting and Deselecting Dinos for more information

```React
 const [selectedDino, setSelectedDino] = useState(null)

  //code in between

  const handleSelected = (index) => {
    setSelectedDino(prevSelected => (prevSelected === index ? null : index));
  }
```