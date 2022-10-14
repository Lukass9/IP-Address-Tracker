import styled from "styled-components"

export const Title = styled.h2` 
    color: #969696;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
`
export const Information = styled.h3` 
    font-size: 18px;
    margin-top: 0;

    @media screen and (min-width: 1440px){
        font-size: 22px;
        letter-spacing: 1px;
        margin-bottom: 0;
        width: 80%;
    }
`
export const Wrapp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media screen and (min-width: 1440px){
        justify-content: flex-start;
        align-items: flex-start;
        border-right: solid lightgray 1px;
        margin-left: 1.5vw;
        height: 80px;


        &:last-child{
            border-right: none;
        }
    }
`