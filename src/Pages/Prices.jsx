import React from 'react';
import { Link } from 'react-router-dom'

const Prices = () => {
  return (
    <>
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <img src={`https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`} alt="Cute Dog" className="rounded-lg mb-4 w-full h-64 object-cover" />
      <h2 className="text-2xl font-bold mb-2">Adorable Dog</h2>
      <p className="text-gray-700 mb-4">Bring home your new best friend today!</p>
      <div className="text-center">
        <span className="block text-xl font-semibold text-green-600">$299.99</span>
        <span className="block text-sm text-gray-500">Includes initial vaccinations and a starter pack.</span>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Buy Now
      </button>
    </div>

    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <img src={`https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`} alt="Cute Dog" className="rounded-lg mb-4 w-full h-64 object-cover" />
      <h2 className="text-2xl font-bold mb-2">Adorable Dog</h2>
      <p className="text-gray-700 mb-4">Bring home your new best friend today!</p>
      <div className="text-center">
        <span className="block text-xl font-semibold text-green-600">$299.99</span>
        <span className="block text-sm text-gray-500">Includes initial vaccinations and a starter pack.</span>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Buy Now
      </button>
    </div>



    
    </>
  );
};

export default Prices;