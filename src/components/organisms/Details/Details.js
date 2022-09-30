import styled from "styled-components"

const WrappRelative = styled.div`
    position: relative;
    height: 15vh;
    width: 90vw;
`
const Wrapp = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    width: 100%;
    height: 38vh;
    background-color: white;
    z-index: 10000;
    border-radius: 10px;
`


const Details = () =>{
    return(
        <WrappRelative>
            <Wrapp>
                
            </Wrapp>
        </WrappRelative>
    )
}

export default Details