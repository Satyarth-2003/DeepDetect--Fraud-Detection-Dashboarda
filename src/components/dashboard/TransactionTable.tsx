
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

type Status = "approved" | "flagged" | "investigating";

interface Transaction {
  id: string;
  customer: string;
  amount: string;
  date: string;
  status: Status;
  riskScore: number;
}

interface TransactionTableProps {
  transactions: Transaction[];
  className?: string;
}

export const TransactionTable = ({ transactions, className = "" }: TransactionTableProps) => {
  const getStatusIcon = (status: Status) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="text-success" style={{ width: '1rem', height: '1rem' }} />;
      case "flagged":
        return <XCircle className="text-destructive" style={{ width: '1rem', height: '1rem' }} />;
      case "investigating":
        return <AlertTriangle className="text-warning" style={{ width: '1rem', height: '1rem' }} />;
    }
  };

  const getRiskBadge = (score: number) => {
    if (score >= 75) {
      return <span className="badge badge-destructive">High</span>;
    } else if (score >= 30) {
      return <span className="badge badge-outline" style={{ borderColor: 'var(--warning)', color: 'var(--warning)' }}>Medium</span>;
    } else {
      return <span className="badge badge-outline" style={{ borderColor: 'var(--success)', color: 'var(--success)' }}>Low</span>;
    }
  };

  return (
    <div className={`transaction-table ${className}`}>
      <div className="table-container">
        <table className="table">
          <thead className="table-header">
            <tr>
              <th>Transaction ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Risk Score</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="table-cell font-medium">{transaction.id}</td>
                <td className="table-cell">{transaction.customer}</td>
                <td className="table-cell">{transaction.amount}</td>
                <td className="table-cell">{transaction.date}</td>
                <td className="table-cell">{getRiskBadge(transaction.riskScore)}</td>
                <td className="table-cell">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(transaction.status)}
                    <span style={{ textTransform: 'capitalize' }}>{transaction.status}</span>
                  </div>
                </td>
                <td className="table-cell" style={{ textAlign: 'right' }}>
                  <button className="btn btn-outline btn-sm">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
