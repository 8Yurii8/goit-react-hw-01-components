import React from 'react';
import PropTypes from 'prop-types';
import css from './profileStyle.module.css';

import { GraySpan, BlackSpan, GrayP } from './profile.style';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p>{username}</p>
        <GrayP>@{tag}</GrayP>
        <GrayP>{location}</GrayP>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <GraySpan>Followers</GraySpan>
          <BlackSpan>{followers}</BlackSpan>
        </li>
        <li className={css.statsItemSecond}>
          <GraySpan>Views</GraySpan>
          <BlackSpan>{views}</BlackSpan>
        </li>
        <li className={css.statsItem}>
          <GraySpan>Likes</GraySpan>
          <BlackSpan>{likes}</BlackSpan>
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
