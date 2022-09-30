import BG from '../../../assets/background/pattern-bg.png'
import styled from 'styled-components';
import {Title} from '../../atoms/Title';
import Input from '../../atoms/Input';
import Details from '../Details/Details';

const Wrapp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
            <Title>IP Address Tracker</Title>
            <Input/>
            <Details/>
        </Wrapp>
    )
}


export default HeaderBg