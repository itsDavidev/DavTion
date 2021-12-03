import styled from 'styled-components';

export const theme = {
  $primary: '#0F353C',
  $secondary: 'rgb(28, 25, 101)',
  $tertiary: '#3F2DB7',
  $extra: '#181B34 ',
};

export const AppStyled = styled.div`
  text-align: center;
  font-size: calc(10px + 2vmin);
  min-height: 100vh;
  background: rgba(15, 53, 60,0.7);
  box-shadow: 20px 20px 60px #0d2d33, -20px -20px 60px #113d45;
  margin: 0px;
`;
