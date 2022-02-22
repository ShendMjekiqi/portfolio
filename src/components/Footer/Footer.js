import { FaCopyright } from "react-icons/fa";


const Footer = () => {
    return ( 
        <div>
             <footer style={{padding:30 ,display:"flex",
                         justifyContent:"center", alignItems:"center", backgroundColor:"black", color:"white"}}>
                <span>Created By Shendi 2020<FaCopyright /> All rights reserved.</span>
            </footer>
        </div>
     );
}
 
export default Footer;