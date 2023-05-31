import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './recipes.css';
const RecipeList = () => {
  const [recipeList, setRecipeList] = useState([]);
  const { username } = useParams();
  const [backgroundColor, setBackgroundColor] = useState('');
  useEffect(()=>{
    const colors = ['#f9dec9','#6eeb83','7ee8fa', '#f6bd60', 'e5446d'];
  const randomIndex =  Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  setBackgroundColor(randomColor)
  })
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/recipes/${username}`);
        const recipes = Object.values(response.data);
        setRecipeList(recipes);
      } catch (error) {
        console.error(error);
        // Handle any errors that occur during the requests
      }
    };

    fetchRecipes();
  }, [username]);

  return (
    <div className='recipes'>
      
      {recipeList.map((recipe) => (
        <div className='recipe' style={{backgroundColor : backgroundColor}} key={recipe._id}>
          <h2>{recipe.title}</h2>
          <p>Instructions:</p>
          <ul>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
          <p>Ingredients:</p>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>Calories: {recipe.calories}</p>
          <p>Cook Time: {recipe.cookTime} minutes</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;