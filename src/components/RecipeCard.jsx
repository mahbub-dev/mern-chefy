/* eslint-disable react/prop-types */
import { useState } from 'react';
import unfavoIcon from '../assets/favourite-svgrepo-com.png'
import favoIcon from '../assets/favourite-svgrepo-com (1).png'
const RecipeCard = ({ item }) => {
    const { recipe_name
        , ingredients, cooking_method, rating } = item
    const [favorite, setFavorite] = useState(false);

    const handleFavorite = () => {
        setFavorite(!favorite);
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium text-gray-800">{recipe_name
                    }</h3>
                    <button onClick={handleFavorite}>
                        {favorite ? (
                             <img src={favoIcon} width={'30px'} alt="favo" />
                            
                        ) : (
                            <img src={unfavoIcon} width={'30px'} alt="unfavo" />
                        )}
                    </button>
                </div>
                <div className="mt-2">
                    <h1 className='font-bold'>Ingredients</h1>
                    <ul className="list-disc list-inside text-gray-700">
                        {ingredients?.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-4 text-gray-700">
                    <h1 className='font-bold'>Cooking Method</h1>
                    <p>
                        {cooking_method}
                    </p>
                </div>
                <div className="flex items-center mt-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-yellow-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 12.41l4.243 2.45-1.02-4.735 3.39-2.94-4.722-.407L10 2.388 8.118 7.778l-4.722.407 3.39 2.94-1.02 4.735L10 12.41z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p className="text-sm font-medium">{rating}/5</p>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
