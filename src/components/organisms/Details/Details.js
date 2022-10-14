import Info from "../../molecules/Info/Info"
import { Wrapp, WrappRelative } from "./Details.style"

const Details = ({details: {ip, city, country_code, postal, UTC, ISP}}) =>{
    return(
        <WrappRelative>
            <Wrapp>
                <Info 
                    title = {"IP ADDRESS"}
                    information = {ip}
                />
                <Info 
                    title = {"LOCATION"}
                    information = {`${city}, ${country_code} ${postal}`}
                />
                <Info 
                    title = {"TIMEZONE"}
                    information = {`UTC ${UTC}`}
                />
                <Info 
                    title = {"ISP"}
                    information = {ISP}
                />
            </Wrapp>
        </WrappRelative>
    )
}

export default Details