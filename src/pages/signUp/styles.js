import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 60vw;
  padding: 30px 10px;
  border-radius: 5px;
  background: #fff;
  text-align: center;

  form {
    max-width: 100%;
    max-height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      font-size: 16px;
      color: #ff3333;
      margin-bottom: 15px;
      border: 2px solid #ff3333;
      padding: 10px;
      width: 60%;
      text-align: center;
    }

    input {
      width: 80%;
      background: #ab59c1;
    }

    button {
      width: 80%;
    }

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
