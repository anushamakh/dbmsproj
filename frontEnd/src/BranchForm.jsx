import { ClassNames } from '@emotion/react';
import React, { useState } from 'react';

function BranchForm() {
  const [branchId, setBranchId] = useState('');
  const [branchName, setBranchName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:8081/branch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Branch_id: branchId,
        Branch_name: branchName,
        Location: location,
      }),
    });
    console.log(response);
    console.log({branchId,branchName,location});
    if (response.ok) {
      alert('Branch added successfully');
    } else {
      alert('Error adding branch');
    }
  };

  return (
    < div className = "mt-4">
    
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-8 bg-white shadow-md rounded-lg  ">
    <h2 className='block mb-2 text-medium font-medium text-gray-700 pb-4'> Branch Insertion form</h2>
    <div className="mb-4">
      <label htmlFor="branchId" className="block mb-2 text-sm font-medium text-gray-700">Branch ID:</label>
      <input
        id="branchId"
        type="number"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={branchId}
        onChange={(e) => setBranchId(e.target.value)}
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="branchName" className="block mb-2 text-sm font-medium text-gray-700">Branch Name:</label>
      <input
        id="branchName"
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={branchName}
        onChange={(e) => setBranchName(e.target.value)}
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-700">Location:</label>
      <input
        id="location"
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
    </div>
    <button
      className="w-full px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg"
      type="submit"
    >
      Add Branch
    </button>
  </form>
  </div>
  

  );
}

export default BranchForm;
