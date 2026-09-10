import { useState } from "react";

function RecipeManager() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [time, setTime] = useState('');
  const [servings, setservings] = useState('');
  const [allergens, setAllergens] = useState('');
  const [ingredients, setIngredients] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Recipe successfully added :)!');

  }
  return (
    <div>
      RecipeManager
      <div>
        <div onSubmit={onSubmit}>
          <div>
            <label>Name:</label>
            <input id='name' type='text' placeholder="Enter name of recipe" onChange={(e) => setName(e.target.value)} value={name} />
          </div>

          <div>
            <label htmlFor='description'>Description:</label>
            <input id='decription' type='text' placeholder="Add description of your recipe" onChange={(e) => setDescription(e.target.value)} value={description} />
          </div>

          <div>
            <div>
              <label htmlFor='cuisine'>Cuisine:</label>
              <input id='cuisine' type='text' onChange={(e) => setCuisine(e.target.value)} value={cuisine} />
            </div>

            <div>
              <label htmlFor='difficulty'>Difficulty:</label>
              <select
                name='difficultyLevel'
                onChange={e => setDifficulty(e.target.value)}
                value={difficulty}
              >
                <option value='' disabled>
                  Select difficulty...
                </option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>

            <div>
              <label htmlFor='time'>Time:</label>
              <input id='time' type='number' placeholder="Enter time(minutes) needed for recipe" onChange={(e) => setTime(e.target.value)} value={time} />
            </div>

            <div>
              <label htmlFor='servings'>Servings:</label>
              <input id='servings' type='number' placeholder="Add servings..." onChange={(e) => setservings(e.target.value)} value={servings} />
            </div>

            <div>
              <label htmlFor='allergens'>Allergens:</label>
              <input id='allergens' type='text' placeholder="Please add any allergies..." onChange={(e) => setAllergens(e.target.value)} value={allergens} />
            </div>

            <div>
              <label htmlFor='ingredients'>Ingredients:</label>
              <input id='ingredients' type='text' onChange={(e) => setIngredients(e.target.value)} value={ingredients} />
            </div>

          </div>
          <button>Submit</button>
        </div>
      </div>

    </div>
  )
}

export default RecipeManager

