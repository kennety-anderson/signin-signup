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
    padding: 0 10px;
    display: flex;
    flex-direction: column;

    h1 {
      text-shadow: 0 0 0.2em #ab59c1, 0 0 0.2em #ab59c1;
      font-family: sans-serif;
      font-size: 35px;
      font-weight: bold;
    }

    a {
      font-size: 14px;
      margin-top: 15px;
      text-decoration: none;
      color: #fff;

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;
