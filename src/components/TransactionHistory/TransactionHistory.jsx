import PropTypes from "prop-types";
import scss from "./TransactionHistory.module.scss";

const TransactionHistory = ({ items }) => (
  <section className={scss.sectionTransaction}>
    <table className={scss.transactionHistory}>
      <thead className={scss.tHead}>
        <tr>
          <th className={scss.tHeadItem}>Type</th>
          <th className={scss.tHeadItem}>Amount</th>
          <th className={scss.tHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={scss.tBody}>
        {items.map((transaction) => (
          <tr className={scss.tBodyTr} key={transaction.id}>
            <td className={scss.tBodyTd}>{transaction.type}</td>
            <td className={scss.tBodyTd}>{transaction.amount}</td>
            <td className={scss.tBodyTd}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default TransactionHistory;

TransactionHistory.prototype = {
  items: PropTypes.arrayOf({
    transaction: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
