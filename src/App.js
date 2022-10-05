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

  const [details, setDetails] = useState('');
  const handleSetDetails = async (det)=>{
    try{
      setDetails(det)
    }
    catch(err){
      console.log(err)
    }
   
  }
  return (
    <Wrapp>
      <GlobalStyle/>  
      <HeaderBg 
        handleSetDetails={handleSetDetails}
        details={details}
        />
      <Map/>
    </Wrapp>
  );
}

export default App;
