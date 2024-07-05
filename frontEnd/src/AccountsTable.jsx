import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

// No transactions as of now.

const AccountsTable = () => {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/account")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.map((item, index) => ({ id: index, ...item }));
        setData(newData);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    { field: "Account_no", headerName: "Account No.", width: 200 },
    { field: "Balance", headerName: "Balance", width: 200 },
    { field: "Account_type", headerName: "Account Type", width:200 },
    { field: "Branch_id", headerName: "Branch", width: 200},
    { field: "Customer_id", headerName: "Customer", width: 200},
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Accounts Table</h2>
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { page: 0, pageSize: 5 } }}
        pageSize={5}
        pageSizeOptions={[5]}
        rowsPerPageOptions={[5]}
      />
    </div>
    </div>
  );
};

export default AccountsTable;
