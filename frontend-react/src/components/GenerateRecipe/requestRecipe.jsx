import React, { useState } from 'react';
import axios from 'axios';
import extractRecipeData from './parseFunction';
const RecipeGenerator = ({username}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');
    
    const handleAddIngredient = () => {
        if (newIngredient.trim() !== '') {
        setIngredients([...ingredients, newIngredient]);
        setNewIngredient('');
        }
    };

    const handleGenerateRecipe = async () => {
        setIsLoading(true);
        try {
            // Make a request to your backend API to check if the user has enough tokens
            const response = await axios.get('http://localhost:5000/tokens/' + username); // Replace with your actual endpoint
            if (response.data[0].balance) {
            // User has enough tokens, proceed with recipe generation
            const prompt = `${ingredients.join(', ')}`;
            let chatResponse = await axios.post('http://localhost:5000/generate-recipe', { prompt }); // Replace with your actual endpoint
            // Process the chat response and extract the recipe details
            chatResponse = chatResponse.data
            const {title, ingredientList, instructions, cookTime, calories} = extractRecipeData(chatResponse.data);
            setRecipe({
                title,
                ingredientList,
                instructions,
                cookTime,
                calories,
            });


            } else {
            // User doesn't have enough tokens, handle accordingly
            console.log('Not enough tokens');
            }
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
        };

    return (
        <div>
        <h2>Add Ingredients</h2>
        <form>
            <input
            type="text"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
            />
            <button type="button" onClick={handleAddIngredient}>
            Add
            </button>
        </form>

        <h2>Ingredients</h2>
        <ul>
            {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
            ))}
        </ul>

        {isLoading ? (
            <p>Loading...</p>
        ) : (
            <div>
            {Object.keys(recipe).length > 0 ? (
                <div>
                <h2>Generated Recipe</h2>
                <h3>Title: {recipe.title}</h3>
                <p>Ingredients: {recipe.ingredientList}</p>

                <p>Instructions: {recipe.instructions}</p>
                <p>Calories: {recipe.calories}</p>
                <p>Cook Time: {recipe.cookTime}</p>
                </div>
            ) : (
                <button onClick={handleGenerateRecipe}>Generate Recipe</button>
            )}
            </div>
        )}
        </div>
    );
    };

export default RecipeGenerator;

