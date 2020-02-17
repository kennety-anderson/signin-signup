import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 320px;
  text-align: center;

  form {
    max-height: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    h1 {
      text-shadow: 0 0 0.2em #87f, 0 0 0.2em #87f;
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
`
