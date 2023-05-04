import React from "react";
import transactions from './transactions.json'
import { Styles } from './Style'


export const TransactionHistory = () => (
  <table style={Styles.table} className="transaction-history">
  <thead>
    <tr>
      <th style={Styles.th}>Type</th>
      <th style={Styles.th}>Amount</th>
      <th style={Styles.th}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map((item) => (
      <tr key={item.id}>
        <td style={{ ...Styles.td, ...Styles.type }}>{item.type}</td>
        <td style={Styles.td}>{item.amount}</td>
        <td style={Styles.td}>{item.currency}</td>
      </tr>
    ))}
  </tbody>
</table>
    
  );