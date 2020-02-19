import React from 'react';
import { Input } from './styles';

const input = ({ type = 'text', placeholder, onChange = () => {} }) => (
  <Input
    type={type}
    placeholder={placeholder}
    onChange={event => onChange(event)}
  />
);

export default input;
