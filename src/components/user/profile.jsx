import React from 'react';
import PropTypes from 'prop-types';
import { ProfileStyles, Description, Avatar, Stats, StatsItem, StatsItemSecond } from './ProfileStyles'
const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div  style={ProfileStyles}>
      <div style={Description}>
        <img src={avatar} alt="User avatar" style={Avatar} />
        <p className="name">{username}</p>
        <p style={{color: "gray"}}>@{tag}</p>
        <p style={{color: "gray"}}>{location}</p>
      </div>

      <ul style={Stats}>
        <li style={StatsItem}> 
          <span style={{color: "gray"}}>Followers</span>
          <span style={{color: "black"}}>{followers}</span>
        </li>
        <li style={StatsItemSecond}>
          <span style={{color: "gray"}}>Views</span>
          <span style={{color: "black"}}>{views}</span>
        </li>
        <li style={StatsItem}>
          <span style={{color: "gray"}}>Likes</span>
          <span style={{color: "black"}}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
