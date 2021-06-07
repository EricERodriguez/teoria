/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default ({ items }) => (
  <ul>
    {items.map(i => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);
