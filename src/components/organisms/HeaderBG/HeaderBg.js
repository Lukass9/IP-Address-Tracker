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
    height: 450px;
    width: 100%;
    margin: 0;
    background-image: url(${BG});
    background-size: cover;
    background-position: center;

    @media screen and (min-width: 1440px){
        height: 35vh;
        justify-content: space-evenly;
    }
`

const HeaderBg = ({handleSetDetails, details})=> {
    
    return(
        <Wrapp>
            <Title>IP Address Tracker</Title>
            <Input handleSetDetails={handleSetDetails}/>
            <Details details={details}/>
        </Wrapp>
    )
}


export default HeaderBg