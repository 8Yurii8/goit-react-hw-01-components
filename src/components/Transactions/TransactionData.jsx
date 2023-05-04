import React from "react";
import PropTypes from 'prop-types';
import transactions from './transactions.json';
import { TransactionHistory } from './TransactionHistory';
 
export const TransactionData = () => {
    const [item] = transactions;
  
    return (
      <TransactionHistory
        id={item.id}
        type={item.type}
        amount={item.amount}
        currency={item.currency}
      />
    )};
  
    TransactionData.propTypes = {
        transactions: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
          }),
        ),
      };