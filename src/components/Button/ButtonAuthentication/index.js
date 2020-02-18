import React from 'react';
import { Button } from './styles';

const button = ({ type = 'submit', message }) => (
  <Button type={type}>{message}</Button>
);

export default button;
