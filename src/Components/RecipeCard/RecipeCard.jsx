
import PropTypes from 'prop-types';
const RecipeCard = ({ recipe }) => {
  const { recipe_name, short_description, ingredients, preparing_time, calories } = recipe;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      {/* <img className="w-full h-48 object-cover" src={recipe.recipe_image} alt={recipe_name} /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{recipe_name}</div>
        <p className="text-gray-700 text-base">{short_description}</p>
        <ul className="list-disc list-inside mt-2">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="mt-2"><strong>Ingredients Count:</strong> {ingredients.length}</p>
        <p><strong>Preparing Time:</strong> {preparing_time}</p>
        <p><strong>Calories:</strong> {calories}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Want to Cook
        </button>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
 recipe: PropTypes.object.isRequired
};

export default RecipeCard;
