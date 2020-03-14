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
  width: 350px;
  max-width: 90vw;
  text-align: center;

  form {
    max-height: 50%;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      font-size: 20px;
      color: #ff3333;
      margin-bottom: 25px;
      border: 2px solid #ff3333;
      padding: 10px;
      width: 60%;
      text-align: center;
    }

    h1 {
      text-shadow: 0 0 0.1em #ab59c1, 0 0 0.1em #ab59c1;
      font-family: sans-serif;
      font-size: 35px;
      font-weight: bold;
    }

    input {
      width: 100%;
      box-sizing: border-box;
      box-shadow: none;
      outline: none;
      border: none;
      border-bottom: 2px solid #999;
      background: transparent;
      transition: 0.5s;
      color: #ffff;

      &:focus ~ label,
      &:valid ~ label {
        top: -16px;
        left: 5%;
        color: #f7497d;
        font-size: 15px;
        font-weight: bold;
      }

      &:focus,
      &:valid {
        border-bottom: 2px solid #f7497d;
      }
    }

    button {
      width: 100%;
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

  form div {
    width: 100%;
    position: relative;
  }

  form div label {
    position: absolute;
    top: 10px;
    left: 5%;
    color: #999;
    transition: 0.5s;
    pointer-events: none;
  }
`;
