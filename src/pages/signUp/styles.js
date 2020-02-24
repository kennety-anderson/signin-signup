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
      margin-bottom: 25px;
      border: 2px solid #ff3333;
      padding: 10px;
      width: 60%;
      text-align: center;
    }

    input {
      width: 80%;
      box-sizing: border-box;
      box-shadow: none;
      outline: none;
      border: none;
      border-bottom: 2px solid #999;
      background: #ffff;
      transition: 0.5s;
      color: black;

      &:focus ~ label,
      &:valid ~ label {
        top: -12px;
        left: 10%;
        color: #f7497d;
        font-size: 14px;
        font-weight: bold;
      }

      &:focus,
      &:valid {
        border-bottom: 2px solid #f7497d;
      }
    }

    h1 {
      text-shadow: 0 0 0.1em #ab59c1, 0 0 0.1em #ab59c1;
      font-family: sans-serif;
      font-size: 35px;
      font-weight: bold;
    }

    button {
      width: 80%;
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
    left: 10%;
    color: #999;
    transition: 0.5s;
    pointer-events: none;
  }
`;
