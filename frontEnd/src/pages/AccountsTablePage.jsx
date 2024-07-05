import AccountsTable from "../AccountsTable";
import AccountsTableForm from "../AccountBalance";
import Navbar from "../navbar";
import AccountBalanceForm from "../AccountBalance";
import AccountForm from "../AccountForm";
 const  AccountsTablePage = ()=> {
    return (
        <div>
        
        <AccountsTable/>
      <button onClick={() => alert('Cannot delete account with a positive balance')}>Delete</button>
            <AccountBalanceForm />

            {/* <AccountForm /> */}
        </div>
    );
};
export default AccountsTablePage;