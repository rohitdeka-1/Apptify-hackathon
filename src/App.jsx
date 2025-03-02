import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import RecipeChatBot from './RecipeChatBot';
import Donate from './Donate';
import FoodLocator from "./FoodLocator"; 


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-200">
        
       
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipeChatBot />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/food-locator" element={<FoodLocator />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
