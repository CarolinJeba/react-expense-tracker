import React from 'react';

export const IncomeExpenses = () => {
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>$1.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>$1.00</p>
      </div>
    </div>
  );
};
