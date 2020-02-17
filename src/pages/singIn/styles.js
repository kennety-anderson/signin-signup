import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 320px;
  text-align: center;

  form {
    max-height: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
`;
