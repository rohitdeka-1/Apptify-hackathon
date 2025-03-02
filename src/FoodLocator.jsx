import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const foodPlaces = [
  { id: 1, name: "Gurudwara Sant Kutiya", address: "No. 7, Harish Mukherjee Road, Bhowanipore, Kolkata" },
  { id: 2, name: "Mother House Soup Kitchen", address: "54A, AJC Bose Road, Entally, Kolkata" },
  { id: 3, name: "Iskcon Kolkata Food Relief", address: "22 Gurusaday Road, Ballygunge, Kolkata" },
  { id: 4, name: "Anand Bhavan Free Meals", address: "90, College Street, Bowbazar, Kolkata" },
  { id: 5, name: "Kolkata Langar Seva", address: "Opp. Rabindra Sadan Metro Station, Kolkata" },
  { id: 6, name: "Ramkrishna Mission Kitchen", address: "33, Belur Math, Howrah, Kolkata" },
  { id: 7, name: "Kolkata Municipal Food Shelter", address: "Near Park Street Metro Station, Kolkata" },
  { id: 8, name: "Birla Mandir Langar", address: "29, Ashutosh Chowdhury Ave, Ballygunge, Kolkata" },
];

const FoodLocator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Filter food places based on search input
  const filteredPlaces = foodPlaces.filter(
    (place) =>
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-secondary/10 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Free Food </h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name or address..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="input input-bordered w-full max-w-md mb-6 p-2"
      />

      {/* Display Food Places */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <div key={place.id} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{place.name}</h2>
              <p className="text-sm text-gray-600">{place.address}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No results found</p>
        )}
      </div>

      <button className="btn btn-secondary mt-6" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
};

export default FoodLocator;
