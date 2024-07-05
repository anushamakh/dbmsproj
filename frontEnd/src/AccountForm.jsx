import React, { useState } from "react";

function AccountForm() {
  const [accountNo, setAccountNo] = useState("");
  const [balance, setBalance] = useState("");
  const [accountType, setAccountType] = useState("");
  const [branchId, setBranchId] = useState("");
  const [customerId, setCustomerId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:8081/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Account_no: accountNo,
        Balance: balance,
        Account_type: accountType,
        Branch_id: branchId,
        Customer_id: customerId,
      }),
    });
    console.log(
      JSON.stringify({
        Account_no: accountNo,
        Balance: balance,
        Account_type: accountType,
        Branch_id: branchId,
        Customer_id: customerId,
      })
    );
    if (response.ok) {
      alert("Account added successfully");
    } else {
      alert("Error adding account");
    }
  };

  return (
    <div className="mt-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto p-8 bg-white shadow-md rounded-lg"
      >
        <h2 className="block mb-2 text-medium font-medium text-gray-700 pb-4">
          Account Insertion Form
        </h2>
        <div className="mb-4">
          <label
            htmlFor="accountNo"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Account Number:
          </label>
          <input
            id="accountNo"
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="balance"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Balance:
          </label>
          <input
            id="balance"
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="accountType"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Account Type:
          </label>
          <input
            id="accountType"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="branchId"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Branch ID:
          </label>
          <input
            id="branchId"
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={branchId}
            onChange={(e) => setBranchId(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="customerId"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Customer ID:
          </label>
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
          Add Account
        </button>
      </form>
    </div>
  );
}

export default AccountForm;
