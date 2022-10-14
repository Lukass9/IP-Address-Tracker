import { useEffect, useRef, useState } from "react";
import { changeToUTC } from "../../assets/helpers/changeToUTC";
import { Inp, Sub, Wrapp } from "./Input.style";

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