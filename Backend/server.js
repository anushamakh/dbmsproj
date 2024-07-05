const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "project",
}); 
db.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});
// app.get("/", (req, res) => {
//   return res.json("Hello World!");
// });
app.get("/branch", (req, res) => {
  const sql = "SELECT * FROM Branch";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/customer", (req, res) => {
  const sql = "SELECT * FROM Customer";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/address", (req, res) => {
  const sql = "SELECT * FROM Address";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/account", (req, res) => {
  const sql = "SELECT * FROM Account";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/loan", (req, res) => {
  const sql = "SELECT * FROM Loan";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/employee", (req, res) => {
  const sql = "SELECT * FROM Employee";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/transaction", (req, res) => {
  const sql = "SELECT * FROM Transaction";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/auditlog", (req, res) => {
  const sql = "SELECT * FROM AuditLog";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get('/account/balance/:account_no', (req, res) => {
  const { account_no } = req.params;
  const sql = 'CALL GetAccountBalance(?)';
  db.query(sql, [account_no], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error getting account balance');
    } else {
      const result = results[0];
      if (result.length > 0) {
        const balance = result[0].Balance;
        res.status(200).json({ balance });
      } else {
        res.status(404).json({ error: 'Account not found. Please check the account number and try again.' });
      }
    }
  });
});

app.get('/customer/branch/:customer_id', (req, res) => {
  const { customer_id } = req.params;
  const sql = 'CALL GetCustomerBranch(?)';
  db.query(sql, [customer_id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error getting branch ID');
    } else {
      const result = results[0];
      if (result.length > 0) {
        const branchId = result[0].Branch_id;
        res.status(200).json({ branchId });
      } else {
        res.status(404).json({ error: 'Customer not found. Please check the customer ID and try again.' });
      }
    }
  });
});




app.listen(8081, () => {
  console.log("Server is running on http://localhost:8081");
});


app.post('/branch', (req, res) => {
  const { Branch_id, Branch_name, Location } = req.body;
  const sql = 'INSERT INTO Branch (Branch_id, Branch_name, Location) VALUES (?, ?, ?)';
  db.query(sql, [Branch_id, Branch_name, Location], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error adding branch');
    } else {
      res.status(200).send('Branch added successfully');
    }
  });
});

app.post('/transaction', (req, res) => {
  const { Transaction_type, Amount, Account_from, Account_to } = req.body;
  const sql = 'INSERT INTO Transaction (Transaction_type, Amount, Transaction_date, Account_from, Account_to) VALUES (?, ?, NOW(), ?, ?)';
  db.query(sql, [Transaction_type, Amount, Account_from, Account_to], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error adding transaction');
    } else {
      res.status(200).send('Transaction added successfully');
    }
  });
});

app.post('/customer', (req, res) => {
  const { Customer_id, First_name, Last_name, DOB, Address, Mobile_no } = req.body;
  const sql = 'INSERT INTO Customer (Customer_id, First_name, Last_name, DOB, Address, Mobile_no) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [Customer_id, First_name, Last_name, DOB, Address, Mobile_no], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error adding customer');
    } else {
      res.status(200).send('Customer added successfully');
    }
  });
});

// app.post('/account', (req, res) => {
//   const { Account_no, Balance, Account_type, Branch_id, Customer_id } = req.body;
//   const sql = 'INSERT INTO Account (Account_no, Balance, Account_type, Branch_id, Customer_id) VALUES (?, ?, ?, ?, ?)';
//   db.query(sql, [Account_no, Balance, Account_type, Branch_id, Customer_id], (err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('Error adding account');
//     } else {
//       res.status(200).send('Account added successfully');
//     }
//   });
// });

// npm init - y
// npm install mysql express cors body - parser nodemon

// scripts- "start": "nodemon server.js