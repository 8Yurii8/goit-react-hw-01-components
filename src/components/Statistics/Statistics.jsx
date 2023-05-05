import React from 'react';

import data from './data.json';

import PropTypes from 'prop-types';

import css from './Statistics.module.css';

 /* Функція для генерації випадкового кольору */
 function generateRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
} 


export const Statistics = ({title, stats}) => (
  <section className={css.statistics}>
    {title && <h2>{title}</h2>}
    <ul className={css.statList}>
      {data.map((item) => (
        <li className={css.listItem} style={{ backgroundColor: generateRandomColor() }} key={item.id}>
          <span >{item.label}</span>
          <span >{item.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired
};

 