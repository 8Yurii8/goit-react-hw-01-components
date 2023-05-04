import React from 'react';
import friends from './friends.json'
import { Styles, Status } from './style'


export const FriendListItem = () => (
  <ul style={Styles.friendList}>
  {friends.map((item) => (
    <li  key={item.id} style={Styles.item}>
      <span  style={{ ...Status, backgroundColor: item.isOnline ? "green" : "red" }}></span>
      <img  src={item.avatar} alt="User avatar" style={Styles.avatar} />
      <p style={Styles.name}>{item.name}</p>
    </li>
  ))}
</ul>
    
  );