import BG from '../../../assets/background/pattern-bg.png'
import styled from 'styled-components';
import {Title} from '../../atoms/Title';

const Wrapp = styled.div`
  display: flex;
  position: relative;
  height: 35vh;
  width: 100%;
  margin: 0;
  background-image: url(${BG});
  background-size: cover;
  background-position: center;
`

const HeaderBg = ()=> {
    
    return(
        <Wrapp>
            <h1>IP Address Tracker</h1>
        </Wrapp>
    )
}


export default HeaderBg