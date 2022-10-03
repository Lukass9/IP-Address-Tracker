import React from 'react'
import { GlobalStyle } from './assets/styles/GlobalStyles';
import styled from 'styled-components';
import Map from './components/organisms/Map/Map'
import HeaderBg from './components/organisms/HeaderBG/HeaderBg';

const Wrapp = styled.div` 
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100vh;
`

const App = ()=> {

  return (
    <Wrapp>
      <GlobalStyle/>  
      <HeaderBg/>
      <Map/>
    </Wrapp>
  );
}

export default App;
