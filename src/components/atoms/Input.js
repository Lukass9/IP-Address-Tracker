import styled from "styled-components"; 
import arrow from  '../../assets/icons/icon-arrow.svg'

const Wrapp = styled.div` 
    display: flex;
`
const Inp = styled.input` 
    margin: 0;
    padding: 25px;
    border: none;
    outline: none;
    border-radius: 15px 0 0 15px;
    width: 73vw; 

    @media screen and (min-width: 1440px){
        width: 25vw;
        padding: 15px;
    }
`
const Sub = styled.button`
    width: 18vw;
    background-color: black;
    border: none;
    outline: none;
    border-radius: 0 15px 15px 0;
    background-image: url(${arrow});
    background-position: center;
    background-repeat: no-repeat;

    @media screen and (min-width: 1440px){
        width: 3vw;
    }
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