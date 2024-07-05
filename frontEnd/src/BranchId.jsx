import React, { useState } from 'react';

function BranchId() {
  const [customerId, setCustomerId] = useState('');
  const [branchId, setBranchId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8081/customer/branch/${customerId}`);
      if (response.ok) {
        const data = await response.json();
        setBranchId(data.branchId);
      } else if (response.status === 404) {
        alert('Customer not found. Please check the customer ID and try again.');
      } else {
        alert('Error getting branch ID');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="my-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
        <h2 className="block mb-2 text-medium font-medium text-gray-700 pb-4">Check Customer Branch</h2>
        <div className="mb-4">
          <label htmlFor="customerId" className="block mb-2 text-sm font-medium text-gray-700">Customer ID:</label>
          <input
            id="customerId"
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
        </div>
        <button
          className="w-full px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg"
          type="submit"
        >
          Check Branch
        </button>
        {branchId && (
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-700">Branch ID:</h3>
            <p className="text-lg text-gray-900">{branchId}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default BranchId;
