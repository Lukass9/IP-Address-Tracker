import React, { useState } from 'react'
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
  const [details, setDetails] = useState({
    ip: '', 
    city: '', 
    country_code: '', 
    postal: '',
    UTC: '',
    ISP: '',
    latitude: '',
    longitude: ''
  });
  
  const handleSetDetails = (det)=>{
    setDetails(det)
  }
  return (
    <Wrapp>
      <GlobalStyle/>  
      <HeaderBg 
        handleSetDetails={handleSetDetails}
        details={details}
        />
      <Map details={details}/>
    </Wrapp>
  );
}

export default App;
