import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ food, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-md shadow-lg w-96 relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">{food.strMeal}</h2>
        <img src={food.strMealThumb} alt={food.strMeal} className="w-full h-40 object-cover rounded-md mb-4" />
        <p className="text-gray-700">{food.strInstructions}</p>
      </div>
    </div>
  );
};

export default Modal;
