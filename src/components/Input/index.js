import React from 'react';

import { Input } from './styles';

function input({ type = 'text', placeholder }) {
  return <Input type={type} placeholder={placeholder} />;
}

export default input;
