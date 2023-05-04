import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { User } from 'components/user/userSeting';
import { Statistick } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionData } from 'components/Transactions/TransactionData';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <User />
    <Statistick />
    <FriendList />
    <TransactionData />
  </React.StrictMode>
);
