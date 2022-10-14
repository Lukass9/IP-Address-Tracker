import { Information, Title, Wrapp } from "./Info.style"

const Info = ({title, information}) =>{
    return (
        <Wrapp>
            <Title> {title} </Title>
            <Information> {information} </Information>
        </Wrapp>
    )
}

export default Info