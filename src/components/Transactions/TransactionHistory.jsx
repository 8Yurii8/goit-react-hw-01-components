import React from "react";
import css from './transactionsStyle.module.css'
import PropTypes from 'prop-types';

export const TransactionHistory = ({transactions}) => (
  <table className={css.table} >
  <thead>
    <tr>
      <th className={css.th} >Type</th>
      <th className={css.th} >Amount</th>
      <th className={css.th} >Currency</th>
    </tr>
  </thead>
  <tbody>
    {transactions.map(({ id, type, amount, currency }) => (
      <tr key={id}>
       <td className={`${css.td} ${css.type}`}>{type}</td>
        <td className={css.td} >{amount}</td>
        <td className={css.td} >{currency}</td>
      </tr>
    ))}
  </tbody>
</table>
    
  );

  TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired
  };