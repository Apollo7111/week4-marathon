import React, { useState } from "react";
import "./RecipeManager.css";
import Recipe from "./Recipe";

function RecipeManager() {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [time, setTime] = useState('');
  const [servings, setServings] = useState('');
  const [allergens, setAllergens] = useState('');
  const [ingredients, setIngredients] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleCuisineChange(event) {
    setCuisine(event.target.value);
  }

  function handleDifficultyChange(event) {
    setDifficulty(event.target.value);
  }

  function handleTimeChange(event) {
    setTime(event.target.value);
  }

  function handleServingsChange(event) {
    setServings(event.target.value);
  }
  function handleAllergensChange(event) {
    setAllergens(event.target.value);
  }

  function handleIngredientsChange(event) {
    setIngredients(event.target.value);
  }

  function addRecipe() {
    if (name.trim() !== "" && description.trim() !== "" && cuisine.trim() !== "" && difficulty.trim() !== "" && time.trim() !== "" && servings.trim() !== "" && allergens.trim() !== "" && ingredients.trim() !== "") {
      setRecipes((b) => [...b, { name, description, cuisine, difficulty, time, servings, allergens, ingredients }]);
      setName("");
      setDescription("");
      setCuisine("");
      setDifficulty("");
      setTime("");
      setServings("");
      setAllergens("");
      setIngredients("");
    }
  }

  function deleteRecipe(index) {
    const updateRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updateRecipes);
  }

  return (
    <div className="app-container">
      <h1>Recipe Manager</h1>
      <div className="input-section">

        <input
          type="text"
          placeholder="Enter name of recipe..."
          value={name}
          onChange={handleNameChange}
          className="input-field"
        />

        <input
          type="text"
          placeholder="Enter description..."
          value={description}
          onChange={handleDescriptionChange}
          className="input-field"
        />

        <input
          type="text"
          placeholder="Enter cuisine/origin of recipe..."
          value={cuisine}
          onChange={handleCuisineChange}
          className="input-field"
        />

        <div className="input-field" style={{ backgroundColor: "white", color: "gray" }}>
          <label htmlFor='difficulty'>Difficulty: </label>
          <select
            name='difficultyLevel'
            onChange={handleDifficultyChange}
            value={difficulty}
          >
            <option value='' disabled>
              Select
            </option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <input
          type="number"
          placeholder="Enter total cook time needed..."
          value={time}
          onChange={handleTimeChange}
          className="input-field"
        />

        <input
          type="number"
          placeholder="Enter total amount of servings..."
          value={servings}
          onChange={handleServingsChange}
          className="input-field"
        />

        <input
          type="text"
          placeholder="Enter allergens..."
          value={allergens}
          onChange={handleAllergensChange}
          className="input-field"
        />

        <textarea
          placeholder="Enter ingredients needed..."
          value={ingredients}
          onChange={handleIngredientsChange}
          className="input-field"
        />

        <button onClick={addRecipe} className="add-button">Submit</button>
      </div>

      <div className="recipes-section">
        <h2>Your Recipes ({recipes.length})</h2>
        {recipes.length === 0 ? (
          <p className="empty-message">No recipes yet. Add one to get started!</p>
        ) : (
          <ol className="recipes-list">
              {recipes.map((recipe, index) => (
                <Recipe
                  key={index}
                  recipe={recipe}
                  onDelete={() => deleteRecipe(index)}
                />
              ))}
          </ol>
        )}
      </div>

    </div>



  )
}

export default RecipeManager

