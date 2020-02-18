import styled from 'styled-components';

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  height: 45px;
  padding: 0 10px;
  color: #fff;
  margin: 0 0 12px;
  font-size: 16px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;
