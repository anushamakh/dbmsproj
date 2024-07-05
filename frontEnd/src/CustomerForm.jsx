import React, { useState } from 'react';

function CustomerForm() {
  const [customerId, setCustomerId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:8081/customer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Customer_id: customerId,
        First_name: firstName,
        Last_name: lastName,
        DOB: dob,
        Address: address,
        Mobile_no: mobileNo,
      }),
    });
    console.log(response);
    console.log({customerId, firstName, lastName, dob, address, mobileNo});
    if (response.ok) {
      alert('Customer added successfully');
    } else {
      alert('Error adding customer');
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
        <h2 className='block mb-2 text-medium font-medium text-gray-700 pb-4'> Customer Insertion Form</h2>
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
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">First Name:</label>
          <input
            id="firstName"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">Last Name:</label>
          <input
            id="lastName"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-700">Date of Birth:</label>
          <input
            id="dob"
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">Address:</label>
          <input
            id="address"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="mobileNo" className="block mb-2 text-sm font-medium text-gray-700">Mobile Number:</label>
          <input
            id="mobileNo"
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            required
          />
        </div>
        <button
          className="w-full px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg"
          type="submit"
        >
          Add Customer
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;
