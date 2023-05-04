import React from 'react';
import { Title } from './Title';
import data from './data.json';
import { Statistics, StatList, ListItem } from './style'
import { generateRandomColor } from './style';
export const Item = () => (
  <section style= {Statistics}>
    <Title />
    <ul style={StatList}>
      {data.map((item) => (
        <li style={{ ...ListItem, backgroundColor: generateRandomColor() }} key={item.id}>
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);


