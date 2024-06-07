import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoodItemCard from './FoodItemCard';
import Modal from './Modal';

const FoodItemsSection = ({ filterArea, sortOrder }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchFoodItems = async () => {
      const area = filterArea || 'Indian';
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
      setFoodItems(response.data.meals);
    };
    fetchFoodItems();
  }, [filterArea]);

  useEffect(() => {
    if (sortOrder) {
      const sortedItems = [...foodItems].sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.strMeal.localeCompare(b.strMeal);
        } else {
          return b.strMeal.localeCompare(a.strMeal);
        }
      });
      setFoodItems(sortedItems);
    }
  }, [sortOrder]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedItems = foodItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedItems.map(food => (
          <FoodItemCard key={food.idMeal} food={food} onClick={setSelectedFood} />
        ))}
      </div>
      {selectedFood && <Modal food={selectedFood} onClose={() => setSelectedFood(null)} />}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(foodItems.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`p-2 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FoodItemsSection;
