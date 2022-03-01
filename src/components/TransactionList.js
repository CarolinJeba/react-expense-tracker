import React from 'react';

export const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        <li className='plus'>
          Cash
          <span>+1</span>
          <button className='delete-btn'>x</button>
        </li>
        <li className='minus'>
          Spent
          <span>-1</span>
          <button className='delete-btn'>x</button>
        </li>
      </ul>
    </>
  );
};
