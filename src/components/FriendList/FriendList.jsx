import React from 'react';
import friends from './friends.json'
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = () => {
    const [item] = friends;
  
    return (
      <FriendListItem
        id={item.id}
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
      />
    )};
  
    FriendList.propTypes = {
        friends: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
          }),
        ),
      };