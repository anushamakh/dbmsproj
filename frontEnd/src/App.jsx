//import React from "react";
import Navbar from "./navbar"; // assuming you have a Navbar component
//import Routes1 from "./Routes";

import BranchTablePage from "./pages/BranchTablePage";
import TransactionTablePage from "./pages/TransactionTablePage";
import CustomerPage from "./pages/CustomerPage";
import AccountsTablePage from "./pages/AccountsTablePage";
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
function App() {
  return (
    <div>
      
      <Navbar/>
      <Router>
      <Routes>
        <Route path="/branches" element = {<BranchTablePage />}>
          
        </Route>
        <Route path="/transactions" element = {<TransactionTablePage />}>
          
        </Route>
        <Route path="/customers" element = {<CustomerPage />}>
          
        </Route>
        <Route path="/accounts" element = {<AccountsTablePage />}>
          
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
