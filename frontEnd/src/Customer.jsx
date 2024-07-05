import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

// No transactions as of now.

const Customer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/customer")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.map((item, index) => ({ id: index, ...item }));
        setData(newData);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    { field: "Customer_id", headerName: "ID", width: 75 },
    { field: "First_name", headerName: "First Name", width: 110 },
    { field: "Last_name", headerName: "Last Name", width: 110 },
    { field: "DOB", headerName: "Date Of Birth", width: 250},
    { field: "Address", headerName: "Address", width: 400 },
    { field: "Mobile_no", headerName: "Mobile Number", width: 150 },
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Customer Table</h2>
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { page: 0, pageSize: 5 } }}
        pageSize={5}
        pageSizeOptions={[5]}
        rowsPerPageOptions={[5]}
      />
      {/* <BranchForm /> */}
    </div>
    </div>
  );
};

export default Customer;
