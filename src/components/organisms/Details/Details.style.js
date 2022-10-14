import styled from "styled-components"

export const WrappRelative = styled.div`
    position: relative;
    height: 15vh;
    width: 90vw;

    @media screen and (min-width: 1440px){
        width: 65vw;
        height: 6vh;
    }
`
export const Wrapp = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    width: 100%;
    height: 280px;
    background-color: white;
    z-index: 10000;
    border-radius: 15px;

    @media screen and (min-width: 1440px){
        flex-direction: row;
        justify-content: space-between;
        padding: 2vw 0;
        height: min-content;
        /* top: 50%; */
    }
`