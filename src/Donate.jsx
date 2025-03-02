import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Donate = () => {
  const navigate = useNavigate();
  const [donation, setDonation] = useState({ food: "", name: "", address: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation Details:", donation);
    alert("Thank you for your donation!");
    setDonation({ food: "", name: "", address: "" });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-secondary/10 flex flex-col items-center p-6">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Donate Food</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Food Details</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="E.g., 2kg Rice, 5 Bread Loaves"
              value={donation.food}
              onChange={(e) => setDonation({ ...donation, food: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your name"
              value={donation.name}
              onChange={(e) => setDonation({ ...donation, name: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter pickup address"
              value={donation.address}
              onChange={(e) => setDonation({ ...donation, address: e.target.value })}
              required
            />
          </div>

          <div className="flex justify-between">
            <button type="button" className="btn btn-outline" onClick={() => navigate("/")}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;
