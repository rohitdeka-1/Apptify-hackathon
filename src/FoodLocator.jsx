"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MapPin, Search, ArrowLeft, Coffee } from "lucide-react"

const foodPlaces = [
  { id: 1, name: "Gurudwara Sant Kutiya", address: "No. 7, Harish Mukherjee Road, Bhowanipore, Kolkata" },
  { id: 2, name: "Mother House Soup Kitchen", address: "54A, AJC Bose Road, Entally, Kolkata" },
  { id: 3, name: "Iskcon Kolkata Food Relief", address: "22 Gurusaday Road, Ballygunge, Kolkata" },
  { id: 4, name: "Anand Bhavan Free Meals", address: "90, College Street, Bowbazar, Kolkata" },
  { id: 5, name: "Kolkata Langar Seva", address: "Opp. Rabindra Sadan Metro Station, Kolkata" },
  { id: 6, name: "Ramkrishna Mission Kitchen", address: "33, Belur Math, Howrah, Kolkata" },
  { id: 7, name: "Kolkata Municipal Food Shelter", address: "Near Park Street Metro Station, Kolkata" },
  { id: 8, name: "Birla Mandir Langar", address: "29, Ashutosh Chowdhury Ave, Ballygunge, Kolkata" },
]

const FoodLocator = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()


  const filteredPlaces = foodPlaces.filter(
    (place) =>
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.address.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="dark min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 flex flex-col items-center p-4 md:p-6">

      <div className="w-full max-w-4xl mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Free Food Locations
        </h1>
        <p className="text-gray-400">Find free meals and food assistance in Kolkata</p>
      </div>

      {/* Search Bar with glow effect */}
      <div className="relative w-full max-w-md mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by name or address..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary focus:outline-none transition-all shadow-lg"
        />
      </div>

      {/* Display Food Places */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mb-8">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="card bg-gray-800/70 hover:bg-gray-700/80 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden backdrop-blur-sm"
            >
              <div className="card-body p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-full p-2 bg-primary/20 text-primary">
                    <Coffee className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-100 mb-1">{place.name}</h2>
                    <div className="flex items-start gap-1 text-sm text-gray-400">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <p>{place.address}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="btn btn-sm btn-ghost text-primary hover:bg-primary/10">Get Directions</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center p-8 bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="text-gray-400 mb-2">No results found</div>
            <p className="text-sm text-gray-500">Try adjusting your search terms</p>
          </div>
        )}
      </div>

      <button
        className="btn btn-outline border-gray-700 hover:bg-secondary hover:border-secondary text-gray-300 gap-2 transition-all duration-300"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="h-4 w-4" />
        Go Back
      </button>

      {/* Footer */}
      <div className="mt-auto pt-8 text-center text-gray-500 text-sm">
        <p>Helping connect people with free food resources</p>
      </div>
    </div>
  )
}

export default FoodLocator