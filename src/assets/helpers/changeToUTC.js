export const changeToUTC = (offset)=>{
    const rest = ":00"
    const UTC = (offset/3600).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
    
    return offset>0?  "+" + UTC + rest : UTC + rest 
}