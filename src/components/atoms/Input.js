import styled from "styled-components"; 
import Details from "../organisms/Details/Details";
const Wrapp = styled.div` 
    display: flex;
`
const Inp = styled.input` 
    margin: 0;
    padding: 17px;
    border: none;
    outline: none;
    border-radius: 10px 0 0 10px;
   width: 77vw; 
`
const Sub = styled.button`
    width: 13vw;
    background-color: black;
    border: none;
    outline: none;
    border-radius: 0 10px 10px 0;
`

const Input = () =>{
    return (
        <Wrapp>
            <Inp/>
            <Sub/>
        </Wrapp>
    )
}

export default Input