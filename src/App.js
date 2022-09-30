import React from 'react'
import { GlobalStyle } from './assets/styles/GlobalStyles';
import styled from 'styled-components';
import Map from './components/organisms/Map/Map'
import HeaderBg from './components/organisms/HeaderBG/HeaderBg';

const Wrapp = styled.div` 
    display: flex;
    flex-direction: column;
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
