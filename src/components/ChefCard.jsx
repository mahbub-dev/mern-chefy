/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import LazyLoad from 'react-lazy-load';
const ChefCard = ({ item }) => {
    const navigate = useNavigate()
    const { picture, name, years_of_experience, num_of_recipes, likes } = item
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
            <LazyLoad>
                <img className="w-full h-[200px] min-w-[300px]" src={picture} alt={name} />
            </LazyLoad>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base mb-2">
                    Years of experience: {years_of_experience}
                </p>
                <p className="text-gray-700 text-base mb-2">
                    Number of recipes: {num_of_recipes}
                </p>
                <p className="text-gray-700 text-base mb-2">
                    Likes: {likes}
                </p>
            </div>
            <div className="px-6 py-4">
                <button onClick={() => { navigate(`chef/${item.id}`) }} className="bg-[--btn-color]  hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    View Recipes
                </button>
            </div>
        </div>
    );
};

export default ChefCard;
