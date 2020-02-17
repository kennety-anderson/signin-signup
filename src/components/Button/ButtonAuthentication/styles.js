import styled from 'styled-components'
import { darken } from 'polished'

export const Button = styled.button`
  margin: 5px 0 0;
  height: 42px;
  background: #3b9eff;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.3, '#3b9eff')};
  }
`
