import styles from './TransactionHistory.module.css';
import { Transactions } from '../Transactions/Transactions';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.row}>
          <th className={styles.box}>Type</th>
          <th className={styles.box}>Amount</th>
          <th className={styles.box}>Currency</th>
        </tr>
      </thead>

      <Transactions items={items} />
    </table>
  );
};
