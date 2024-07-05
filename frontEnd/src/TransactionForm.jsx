import React, { useState } from 'react';

function TransactionForm() {
  const [transactionType, setTransactionType] = useState('');
  const [amount, setAmount] = useState('');
  const [accountFrom, setAccountFrom] = useState('');
  const [accountTo, setAccountTo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:8081/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Transaction_type: transactionType,
        Amount: amount,
        Account_from: accountFrom,
        Account_to: accountTo,
      }),
    });

    if (response.ok) {
      alert('Transaction added successfully');
    } else {
      alert('Error adding transaction');
    }
  };

  return (
      <div className="my-8"> {/* Added margin top and bottom */}
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
          <h2 className="block mb-2 text-medium font-medium text-gray-700 pb-4">Transaction Form</h2>
          <div className="mb-4">
            <label htmlFor="transactionType" className="block mb-2 text-sm font-medium text-gray-700">Transaction Type:</label>
            <input
              id="transactionType"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-700">Amount:</label>
            <input
              id="amount"
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="accountFrom" className="block mb-2 text-sm font-medium text-gray-700">Account From:</label>
            <input
              id="accountFrom"
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={accountFrom}
              onChange={(e) => setAccountFrom(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="accountTo" className="block mb-2 text-sm font-medium text-gray-700">Account To:</label>
            <input
              id="accountTo"
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={accountTo}
              onChange={(e) => setAccountTo(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg"
            type="submit"
          >
            Add Transaction
          </button>
        </form>
      </div>
  );
}

export default TransactionForm;
