function Recipe({ recipe, onDelete }) {
	return (
		<li className="recipe-item">
			<div className="recipe-info">
				<span className="recipe-name">{recipe.name}</span>
				<span className="recipe-inputs">Description: {recipe.description}</span>
				<span className="recipe-inputs">Cuisine: {recipe.cuisine}</span>
				<span className="recipe-inputs">Recipe difficulty: {recipe.difficulty}</span>
				<span className="recipe-inputs">Total cook time: {recipe.time} minutes</span>
				<span className="recipe-inputs">Servings: {recipe.servings}</span>
				<span className="recipe-inputs">Allergens: {recipe.allergens}</span>
				<span className="recipe-inputs">Ingredients: {recipe.ingredients}</span>
			</div>
			<button onClick={onDelete} className="delete-button">
				Delete
			</button>
		</li>
	);
}

export default Recipe;