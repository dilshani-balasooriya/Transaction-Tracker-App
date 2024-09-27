import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const Income = () => {
  const { transactions } = useContext(GlobalContext);

  // Get amounts array from transactions
  const amounts = transactions.map(transaction => transaction.amount);

  // Calculate income (positive amounts)
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // Calculate expense (negative amounts, and convert to positive for display)
  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">-${expense}</p>
      </div>
    </div>
  );
};
