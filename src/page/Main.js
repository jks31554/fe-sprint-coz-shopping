import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h1`
  font-family: 'Intel';
  font-weight: 700;
`;

function Main() {
  return (
    <div className='App'>
      <header>
        <TitleStyle>COZ Shopping</TitleStyle>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default Main();
