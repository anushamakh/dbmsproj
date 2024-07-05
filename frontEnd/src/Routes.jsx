import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import React from "react";
import BranchTablePage from "./pages/BranchTablePage";
import TransactionTablePage from "./pages/TransactionTablePage";
import CustomerPage from "./pages/CustomerPage";
import AccountsTablePage from "./pages/AccountsTablePage";

function Routes1() {
  return (
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
  );
}

export default Routes1;
