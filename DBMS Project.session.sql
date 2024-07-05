CREATE TABLE Branch(
    Branch_id INT PRIMARY KEY,
    Branch_name VARCHAR(255) NOT NULL,
    Location VARCHAR(255) NOT NULL
);
CREATE TABLE Customer(
    Customer_id INT PRIMARY KEY,
    First_name VARCHAR(255) NOT NULL,
    Last_name VARCHAR(255) NOT NULL,
    DOB DATE NOT NULL,
    Address VARCHAR(255) NOT NULL,
    Mobile_no VARCHAR(10) NOT NULL
);
CREATE TABLE Address(
    Address_id INT PRIMARY KEY,
    Customer_id INT,
    Street_name VARCHAR(255) NOT NULL,
    City_name VARCHAR(255) NOT NULL,
    FOREIGN KEY(Customer_id) REFERENCES Customer(Customer_id)
);
CREATE TABLE Account(
    Account_no INT PRIMARY KEY,
    Balance Decimal(10,2) NOT NULL,
    Account_type VARCHAR(255) NOT NULL,
    Branch_id INT,
    Customer_id INT,
    FOREIGN KEY(Branch_id) REFERENCES Branch(Branch_id),
    FOREIGN KEY(Customer_id) REFERENCES Customer(Customer_id)
);
CREATE TABLE Loan(
    Loan_id INT PRIMARY KEY,
    Amount Decimal(10,2) NOT NULL,
    Loan_type VARCHAR(255) NOT NULL,
    Customer_id INT,
    Branch_id INT,
    FOREIGN KEY(Customer_id) REFERENCES Customer(Customer_id),
    FOREIGN KEY(Branch_id) REFERENCES Branch(Branch_id)
);

CREATE TABLE Employee(
    Employee_id INT PRIMARY KEY,
    First_name VARCHAR(255) NOT NULL,
    Last_name VARCHAR(255) NOT NULL,
    Designation VARCHAR(255) NOT NULL,
    Mobile_no VARCHAR(10) NOT NULL,
    DOB DATE NOT NULL,
    Position VARCHAR(255) NOT NULL,
    Hire_date DATE NOT NULL,
    Branch_id INT,
    FOREIGN KEY(Branch_id) REFERENCES Branch(Branch_id)
);
CREATE TABLE Transaction(
    Transaction_id INT PRIMARY KEY AUTO_INCREMENT,
    Transaction_type VARCHAR(255) NOT NULL,
    Amount Decimal(10,2) NOT NULL,
    Transaction_date DATE NOT NULL,
    Account_from INT,
    Account_to INT,
    FOREIGN KEY(Account_from) REFERENCES Account(Account_no),
    FOREIGN KEY(Account_to) REFERENCES Account(Account_no)
);

CREATE TABLE AuditLog (
    Transaction_id INT,
    Transaction_date DATE,
    Amount Decimal(10,2),
    Account_from INT,
    Account_to INT
);


DESCRIBE Branch;
DESCRIBE Customer;
DESCRIBE Address;
DESCRIBE Account;
DESCRIBE Loan;
DESCRIBE Employee;
DESCRIBE Transaction;



INSERT INTO Branch (Branch_id, Branch_name, Location)
VALUES 
(1, 'Downtown Branch', 'New York'),
(2, 'Uptown Branch', 'Chicago'),
(3, 'Eastside Branch', 'Los Angeles'),
(4, 'Westside Branch', 'San Francisco'),
(5, 'Central Branch', 'Austin'),
(6, 'North Branch', 'Seattle'),
(7, 'South Branch', 'Miami'),
(8, 'Midtown Branch', 'Atlanta'),
(9, 'Suburban Branch', 'Denver'),
(10, 'Riverside Branch', 'Portland');


INSERT INTO Customer (Customer_id, First_name, Last_name, DOB, Address, Mobile_no)
VALUES 
(1, 'John', 'Doe', '1980-01-01', '123 Main St, New York, NY', '1234567890'),
(2, 'Jane', 'Doe', '1985-02-02', '456 Maple Ave, Los Angeles, CA', '2345678901'),
(3, 'Jim', 'Smith', '1990-03-03', '789 Oak Dr, Chicago, IL', '3456789012'),
(4, 'Jill', 'Johnson', '1995-04-04', '321 Pine Ln, Houston, TX', '4567890123'),
(5, 'Joe', 'Brown', '2000-05-05', '654 Elm Pl, Philadelphia, PA', '5678901234'),
(6, 'Julie', 'Davis', '1982-06-06', '987 Cedar Blvd, Phoenix, AZ', '6789012345'),
(7, 'Jerry', 'Miller', '1987-07-07', '345 Spruce St, San Antonio, TX', '7890123456'),
(8, 'Jessica', 'Wilson', '1992-08-08', '678 Redwood Ct, San Diego, CA', '8901234567'),
(9, 'Jeff', 'Moore', '1997-09-09', '234 Birch Pkwy, Dallas, TX', '9012345678'),
(10, 'Joyce', 'Taylor', '2002-10-10', '567 Walnut Rd, San Jose, CA', '0123456789');


INSERT INTO Address (Address_id, Customer_id, Street_name, City_name)
SELECT Customer_id, Customer_id, 
       SUBSTRING_INDEX(Address, ',', 1) as Street_name, 
       SUBSTRING_INDEX(Address, ',', -2) as City_name
FROM Customer;


INSERT INTO Account (Account_no, Balance, Account_type, Branch_id, Customer_id)
VALUES 
(1001, 5000.00, 'Savings', 1, 1),
(1002, 15000.00, 'Checking', 2, 2),
(1003, 2500.00, 'Savings', 3, 3),
(1004, 7500.00, 'Checking', 4, 4),
(1005, 3000.00, 'Savings', 5, 5),
(1006, 9500.00, 'Checking', 6, 6),
(1007, 5500.00, 'Savings', 7, 7),
(1008, 12000.00, 'Checking', 8, 8),
(1009, 3500.00, 'Savings', 9, 9),
(1010, 8000.00, 'Checking', 10, 10);


INSERT INTO Loan (Loan_id, Amount, Loan_type, Customer_id, Branch_id)
VALUES 
(1, 5000.00, 'Home', 1, 1),
(2, 15000.00, 'Car', 2, 2),
(3, 2500.00, 'Personal', 3, 3),
(4, 7500.00, 'Student', 4, 4),
(5, 3000.00, 'Home', 5, 5),
(6, 9500.00, 'Car', 6, 6),
(7, 5500.00, 'Personal', 7, 7),
(8, 12000.00, 'Student', 8, 8),
(9, 3500.00, 'Home', 9, 9),
(10, 8000.00, 'Car', 10, 10);

INSERT INTO Employee (Employee_id, First_name, Last_name, Designation, Mobile_no, DOB, Position, Hire_date, Branch_id)
VALUES 
(1, 'John', 'Doe', 'Manager', '1234567890', '1980-01-01', 'Manager', '2020-01-01', 1),
(2, 'Jane', 'Doe', 'Assistant Manager', '2345678901', '1985-02-02', 'Assistant Manager', '2020-02-02', 2),
(3, 'Jim', 'Smith', 'Clerk', '3456789012', '1990-03-03', 'Clerk', '2020-03-03', 3),
(4, 'Jill', 'Johnson', 'Clerk', '4567890123', '1995-04-04', 'Clerk', '2020-04-04', 4),
(5, 'Joe', 'Brown', 'Manager', '5678901234', '2000-05-05', 'Manager', '2020-05-05', 5),
(6, 'Julie', 'Davis', 'Assistant Manager', '6789012345', '1982-06-06', 'Assistant Manager', '2020-06-06', 6),
(7, 'Jerry', 'Miller', 'Clerk', '7890123456', '1987-07-07', 'Clerk', '2020-07-07', 7),
(8, 'Jessica', 'Wilson', 'Clerk', '8901234567', '1992-08-08', 'Clerk', '2020-08-08', 8),
(9, 'Jeff', 'Moore', 'Manager', '9012345678', '1997-09-09', 'Manager', '2020-09-09', 9),
(10, 'Joyce', 'Taylor', 'Assistant Manager', '0123456789', '2002-10-10', 'Assistant Manager', '2020-10-10', 10);


INSERT INTO Transaction(Transaction_id,Transaction_type,Amount,Transaction_date,Account_from,Account_to)
VALUES
(1,'Checking',500,'2024-04-19',1007,1003);

Select * from Branch;
SELECT * FROM Customer;
SELECT * FROM Address;
SELECT * FROM Account;
SELECT * FROM Loan;
SELECT * FROM Employee;
SELECT * FROM auditlog;

DROP PROCEDURE IF EXISTS GetCustomerLoans;


CREATE PROCEDURE GetAccountBalance(IN p_account_no INT)
BEGIN
    SELECT Balance FROM Account WHERE Account_no = p_account_no;
END;
CALL GetAccountBalance(1003);



CREATE PROCEDURE GetCustomerLoans(IN p_customer_id INT)
BEGIN
   SELECT Amount FROM Loan WHERE Customer_id = p_customer_id;
END;

CALL GetCustomerLoans(2); 

CREATE PROCEDURE GetCustomerBranch(IN p_customer_id INT)
BEGIN
   SELECT Branch_id FROM Account WHERE Customer_id = p_customer_id;
END;

CALL GetCustomerBranch(2);


CREATE TRIGGER transaction_audit_log 
AFTER INSERT ON Transaction
FOR EACH ROW
INSERT INTO AuditLog (Transaction_id, Transaction_date, Amount, Account_from, Account_to)
VALUES (NEW.Transaction_id, NEW.Transaction_date, NEW.Amount, NEW.Account_from, NEW.Account_to);


CREATE TRIGGER update_balance
AFTER INSERT ON Transaction
FOR EACH ROW
BEGIN
   UPDATE Account
   SET Balance = Balance - NEW.Amount
   WHERE Account_no = NEW.Account_from;

   UPDATE Account
   SET Balance = Balance + NEW.Amount
   WHERE Account_no = NEW.Account_to;
END;


CREATE TRIGGER before_account_delete
BEFORE DELETE
ON Account
FOR EACH ROW
BEGIN
   IF OLD.Balance > 0 THEN
      SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Cannot delete account with a positive balance';
   END IF;
END;

CREATE TRIGGER after_account_insert
AFTER INSERT
ON Account
FOR EACH ROW
BEGIN
   INSERT INTO Transaction(Transaction_type, Amount, Transaction_date, Account_from, Account_to)
   VALUES ('Deposit', NEW.Balance, NOW(), NULL, NEW.Account_no);
END;



-- 3 TRIGGER 2 pro