import React from 'react';
import { Input } from './styles';

const input = ({ type, name, placeholder, required, onChange = () => {} }) => (
  <Input
    type={type}
    name={name}
    placeholder={placeholder}
    required={required}
    onChange={e => onChange(e)}
  />
);

export default input;
