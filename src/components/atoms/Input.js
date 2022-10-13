import { useEffect, useRef, useState } from "react";
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
    cursor: pointer;

    @media screen and (min-width: 1440px){
        width: 25vw;
        padding: 15px;
    }
`
const Sub = styled.button`
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

const changeToUTC = (offset)=>{
    const rest = ":00"
    const UTC = (offset/3600).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
    
    return offset>0?  "+" + UTC + rest : UTC + rest 
}

const Input = ({handleSetDetails}) =>{
    const [ipOrDomain, setIpOrDomain] = useState('');
    const inputEl = useRef(null);

    const handleSetInput = (e)=>{
        setIpOrDomain(e.target.value)
    }

    const handleSendInformation = ()=>{
        // fetch(`https://ipwho.is/${ipOrDomain}`)
        fetch(`http://ip-api.com/json/${ipOrDomain}?fields=33581811`)
            .then(res=> res.json())
            .then(res=> {
                console.log(res)
                if(res.status == "success"){
                    inputEl.current.attributes[0].value = 'Search for any IP address or domain'
                    handleSetDetails({  
                        ip: res.query, 
                        city: res.city, 
                        country_code: res.countryCode, 
                        postal: res.zip,
                        UTC: changeToUTC(res.offset),
                        ISP: res.isp,
                        latitude: res.lat,
                        longitude: res.lon
                    })
                }
                else {
                    console.dir(inputEl.current)
                    inputEl.current.value = '';
                    inputEl.current.attributes[0].value = 'Wrong IP or domain address'
                    setIpOrDomain('')
                    handleSetDetails({  
                        ip: 'Wrong IP address', 
                        city: '?', 
                        country_code: '', 
                        postal: '',
                        UTC: '00:00',
                        ISP: '',
                        latitude: 0,
                        longitude: 0
                    })
                }
            })
            .catch(err=> console.log('Błąd', err))
    }

    useEffect(()=>{
        handleSendInformation()
    },[])


    return (
        <Wrapp>
            <Inp
                ref={inputEl}   
                placeholder="Search for any IP address or domain"
                onChange={handleSetInput}
                onKeyDown={(e)=>{
                    if(e.key == "Enter") handleSendInformation()
                }}/>
            <Sub onClick={handleSendInformation}/>
        </Wrapp>
    )
}

export default Input