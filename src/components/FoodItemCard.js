import React from 'react';

const FoodItemCard = ({ food, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onClick(food)}>
      <img src={food.strMealThumb} alt={food.strMeal} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{food.strMeal}</h3>
        <p className="text-gray-600">Rating: {Math.floor(Math.random() * 5) + 1} stars</p>
      </div>
    </div>
  );
};

export default FoodItemCard;
