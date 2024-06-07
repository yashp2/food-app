import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterSection = ({ onFilterChange, onSortChange }) => {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const fetchAreas = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      setAreas(response.data.meals);
    };
    fetchAreas();
  }, []);

  const handleApplyFilter = () => {
    onFilterChange(selectedArea);
    setDropdownOpen(false);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    onSortChange(order);
  };

  return (
    <div className="p-4 bg-gray-100 shadow-md rounded-md flex flex-col md:flex-row justify-between items-center">
      <div className="relative mb-4 md:mb-0">
        <button 
          onClick={() => setDropdownOpen(!dropdownOpen)} 
          className="bg-white border border-gray-300 p-2 rounded-md w-full text-left"
        >
          Filter By Area
        </button>
        {dropdownOpen && (
          <div className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-full z-10 p-2 custcss">
            <div className="flex flex-wrap">
              {areas.map(area => (
                <div key={area.strArea} className="mr-4 mb-2 flex items-center">
                  <input 
                    type="radio" 
                    id={area.strArea} 
                    name="area" 
                    value={area.strArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor={area.strArea} className="text-gray-800">{area.strArea}</label>
                </div>
              ))}
            </div>
            <button 
              className="bg-orange-500 text-white p-2 rounded-md w-full mt-2" 
              onClick={handleApplyFilter}
            >
              Apply
            </button>
          </div>
        )}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => handleSortChange('asc')}
          className={`p-2 rounded-md ${sortOrder === 'asc' ? 'bg-orange-500 text-white' : 'bg-white border border-gray-300'}`}
        >
          A-Z
        </button>
        <button
          onClick={() => handleSortChange('desc')}
          className={`p-2 rounded-md ${sortOrder === 'desc' ? 'bg-orange-500 text-white' : 'bg-white border border-gray-300'}`}
        >
          Z-A
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
