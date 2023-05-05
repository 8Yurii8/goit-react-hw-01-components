import React from 'react';
import css from './friendListStyle.module.css'

export const FriendListItem = ({avatar, name, isOnline}) => {
  
  return (
    <li  className={css.item}>
      <span className={`${css.status} ${isOnline ? css.status : css.offline}`}></span>
      <img  src={avatar} alt="User avatar" className={css.avatar}  />
      <p className={css.name} >{name}</p>
    </li>
  )
}
