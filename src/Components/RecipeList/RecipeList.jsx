import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/recipes.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      
  }, []);
  return (
    <div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.recipe_id} recipe={recipe} 
        ></RecipeCard>
      ))}
    </div>
    </div>
  );
};

export default RecipeList;