
import { Link } from 'react-router-dom'

// const Prices = () => {
//   return (
//     <>
//     <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md max-w-sm mx-auto">
//       <img src={`https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`} alt="Cute Dog" className="rounded-lg mb-4 w-full h-64 object-cover" />
//       <h2 className="text-2xl font-bold mb-2">Adorable Dog</h2>
//       <p className="text-gray-700 mb-4">Bring home your new best friend today!</p>
//       <div className="text-center">
//         <span className="block text-xl font-semibold text-green-600">$299.99</span>
//         <span className="block text-sm text-gray-500">Includes initial vaccinations and a starter pack.</span>
//       </div>
//       <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
//         Buy Now
//       </button>
//     </div>

//     <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md max-w-sm mx-auto">
//       <img src={`https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`} alt="Cute Dog" className="rounded-lg mb-4 w-full h-64 object-cover" />
//       <h2 className="text-2xl font-bold mb-2">Adorable Dog</h2>
//       <p className="text-gray-700 mb-4">Bring home your new best friend today!</p>
//       <div className="text-center">
//         <span className="block text-xl font-semibold text-green-600">$299.99</span>
//         <span className="block text-sm text-gray-500">Includes initial vaccinations and a starter pack.</span>
//       </div>
//       <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
//         Buy Now
//       </button>
//     </div>



    
//     </>
//   );
// };

// export default Prices;







const PriceCard = ({ image, title, description, price, details }) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md max-w-sm mx-auto mb-6">
      <img src={image} alt={title} className="rounded-lg mb-4 w-full h-64 object-cover" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="text-center">
        <span className="block text-xl font-semibold text-green-600">{price}</span>
        <span className="block text-sm text-gray-500">{details}</span>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Buy Now
      </button>
    </div>
  );
};

const Prices = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
    
      <PriceCard
        image="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Adorable Poodle"
        description="This playful poodle is ready to join your family!"
        price="$349.99"
        details="Includes grooming kit and training sessions."
      />
      <PriceCard
        image="https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Golden Retriever"
        description="Loyal and loving, the perfect family companion."
        price="$399.99"
        details="Includes vaccinations, toys, and a starter pack."
      />
      <PriceCard
        image="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Charming Beagle"
        description="A friendly and curious beagle, full of energy!"
        price="$299.99"
        details="Vaccinated and ready for a new adventure."
      />
      <PriceCard
        image="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1136&format=jpeg"
        title="Cute French Bulldog"
        description="Small but mighty, this French Bulldog is full of character."
        price="$499.99"
        details="Includes pet insurance for 6 months."
      />
    </div>
  );
};

export default Prices;