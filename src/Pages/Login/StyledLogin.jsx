import styled from 'styled-components';
import { theme } from '../../StyledMain';
export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 2rem;
 
  .login {
    display: grid;
    grid-template-rows: 45% 5% 50%;
    height: 100vh;
    border-radius: 3px;
    background: rgba(15, 53, 60, 0.5);
    box-shadow: 20px 20px 60px #0d2d33, -20px -20px 60px #113d45;
    box-shadow: 0px 0px 10px #000;
  }
  @media (min-width: 900px) {
    .login {
      /* background: #dfdfdf; */
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 100%;
    }
  }

  .wlogin {
    grid-row: 1/2;
    span {
      color: #0ff;
    }
    p {
      font-size: 0.8rem;
    }
    img {
      width: 30px;
    }
    .loginBtn {
      display: flex;
      margin: 1rem;
      justify-content: center;
      align-items: center;
      strong {
        margin: 10px;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
      }
    }
  }
  @media (min-width: 900px) {
    .wlogin {
      grid-column: 1/3;
      grid-row: 1/2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      h1 {
        font-size: 4em;
      }
    }
  }
  .loginForm {
    grid-row: 2/4;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 10px #000;
    span {
      color: #ff0000;
    }
    p {
      font-size: 0.8rem;
      padding: 1rem;
    }
    a {
      color: #0ff;
    }
    input {
      margin-bottom: 1rem;
      display: block;
      align-self: center;
      color: white;
      border: none;
      outline: none;
      background: none;
      margin: 1rem 10px;
      border-bottom: 2px solid #000000;
      &::placeholder {
        color: #000000;
      }
    }
  }
  @media (min-width: 900px) {
    .loginForm {
      grid-column: 3/4;
      grid-row: 1/2;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 3rem;
        text-align:end;

      }
      button {
        background: #0f353c;
        box-shadow: 20px 20px 60px #0d2d33, -20px -20px 60px #113d45;
        box-shadow: 0px 0px 10px #000;
      }
      input{
        padding: 1rem;
      }
    }
  }
`;

//