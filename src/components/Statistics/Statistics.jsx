import React from 'react';
import { Item } from './Item';
import data from './data.json';
import PropTypes from 'prop-types';

export const Statistick = () => {
  const [item] = data;

  return (
    <Item
      id={item.id}
      label={item.label}
      percentage={item.percentage}
    />
  )};

Statistick.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.string
};
