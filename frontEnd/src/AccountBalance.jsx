import React, { useState } from 'react';

function AccountBalanceForm() {
  const [accountId, setAccountId] = useState('');
  const [balance, setBalance] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8081/account/balance/${accountId}`);
      if (response.ok) {
        const data = await response.json();
        setBalance(data.balance);
      } else if (response.status === 404) {
        alert('Account not found. Please check the account number and try again.');
      } else {
        alert('Error getting account balance');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="my-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
        <h2 className="block mb-2 text-medium font-medium text-gray-700 pb-4">Check Account Balance</h2>
        <div className="mb-4">
          <label htmlFor="accountId" className="block mb-2 text-sm font-medium text-gray-700">Account ID:</label>
          <input
            id="accountId"
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            required
          />
        </div>
        <button
          className="w-full px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg"
          type="submit"
        >
          Check Balance
        </button>
        {balance && (
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-700">Balance:</h3>
            <p className="text-lg text-gray-900">{balance}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default AccountBalanceForm;
