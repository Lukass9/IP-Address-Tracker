import {Title} from '../../atoms/Title';
import Input from '../../atoms/Input';
import Details from '../Details/Details';
import { Wrapp } from './HeaderBg.style';


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