import styled from "styled-components"; 
import arrow from  '../../assets/icons/icon-arrow.svg'

export const Wrapp = styled.div` 
    display: flex;
`
export const Inp = styled.input` 
    margin: 0;
    padding: 25px;
    border: none;
    outline: none;
    border-radius: 15px 0 0 15px;
    width: 73vw;
    cursor: pointer;

    @media screen and (min-width: 1440px){
        width: 25vw;
        padding: 15px;
    }
`
export const Sub = styled.button`
    width: 18vw;
    background-color: #000;
    border: none;
    outline: none;
    border-radius: 0 15px 15px 0;
    background-image: url(${arrow});
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;

    @media screen and (min-width: 1440px){
        width: 3vw;
    }

    &:hover{
        background-color: #2b2b2b;
    }
`