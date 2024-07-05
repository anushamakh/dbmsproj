
import AccountsTable from "../AccountsTable";
import BranchId from "../BranchId";
import Customer from "../Customer";
import CustomerForm from "../CustomerForm";
const CustomerPage =()=> {
    return (
        <>
            <Customer />
            <CustomerForm />
            <BranchId />
            <AccountsTable />
        </>
    );
}

export default CustomerPage;