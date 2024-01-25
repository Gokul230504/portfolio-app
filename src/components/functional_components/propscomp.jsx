import { Link } from "react-router-dom"

const NavigationBar=()=>{
    return(
        <ul>
        <li><Link to="/About me">About me</Link></li>
        <li><Link to="/Education">Education</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        </ul>
    )
}
export default NavigationBar