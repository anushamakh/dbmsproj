import TransactionForm from "../TransactionForm";
import AccountsTable from "../AccountsTable";
import TransactionTable from "../TransactionTable";
import Customer from "../Customer";
import AuditLogTable from "../AuditTabel";

const BranchTablePage = () => {
  return (
    <>
      <TransactionTable />
      <TransactionForm />
      <AccountsTable />
      <Customer />
      <AuditLogTable />
    </>
  );
};

export default BranchTablePage;
