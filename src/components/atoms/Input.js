import { useEffect, useRef, useState } from "react";
import { Inp, Sub, Wrapp } from "./Input.style";

const Input = ({handleSetDetails}) =>{
    const [ipOrDomain, setIpOrDomain] = useState('');
    const inputEl = useRef(null);

    const handleSetInput = (e)=>{
        setIpOrDomain(e.target.value)
    }
    const handleSendInformation = ()=>{
        // fetch(`https://ipwho.is/${ipOrDomain}`)
        // fetch(`http://ip-api.com/json/${ipOrDomain}?fields=33581811`)
        
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&domain=${ipOrDomain}`)
            .then(res=> res.json())
            .then(res=> {
                // console.log(res)
                if(res.code == 422 || res.code == 400){
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
                else{
                    inputEl.current.attributes[0].value = 'Search for any IP address or domain'
                    handleSetDetails({  
                        ip: res.ip, 
                        city: res.location.city, 
                        country_code: res.location.country, 
                        postal: res.location.postalCode,
                        UTC: res.location.timezone,
                        ISP: res.isp,
                        latitude: res.location.lat,
                        longitude: res.location.lng
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