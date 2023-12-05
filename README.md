# Dino app

Dino app is made for kids who love dinosaurs. They can filter through different types of dinosaurs, look up their favorite dinosaur and find out more about it. They can also add more dinosaurs as they discover more and more of this amazing world!

## Installation

No installation required.

## Usage

- Adding a new Dino

```React
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
        value={image}
        onChange={(e) => setImage(e.target.value)}
        />
      {!isPending && <button>Add Dino</button>}
      {isPending && <button disabled>Adding Dino...</button>}
    </form>
  </div>
)

```