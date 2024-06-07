import React, { useState } from 'react';
import Header from './components/Header';
import FilterSection from './components/FilterSection';
import FoodItemsSection from './components/FoodItemsSection';
import Footer from './components/Footer';

const App = () => {
  const [filterArea, setFilterArea] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <FilterSection onFilterChange={setFilterArea} onSortChange={setSortOrder} />
        <FoodItemsSection filterArea={filterArea} sortOrder={sortOrder} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
