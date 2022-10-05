import { useEffect, useState } from "react";
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



const Input = ({handleSetDetails}) =>{
    const [ipOrDomain, setIpOrDomain] = useState('');

    const handleSetInput = (e)=>{
        setIpOrDomain(e.target.value)
    }

    const handleSendInformation = ()=>{
        fetch(`http://ipwho.is/${ipOrDomain}`)
            .then(res=> res.json())
            .then(res=> {
                handleSetDetails(res)
                console.log(res)
            })
            .catch(err=> console.log(err))
    }

    useEffect(()=>{
        handleSendInformation()
    },[])



    return (
        <Wrapp>
            <Inp onChange={handleSetInput} />
            <Sub onClick={handleSendInformation}/>
        </Wrapp>
    )
}

export default Input