import classes from './Contact.module.css';
import { FaInstagramSquare, FaGithub} from "react-icons/fa";

const handleURL=(url)=>{
    return ()=> window.open(url,"_blank ")
}

const Contact = () => {
    return ( 
        <div className={classes.Contact} id='contact'>
            <div className={classes.Head}>
                <hr></hr>
                <h1>Contact Me</h1>
            </div>
            
                
            <form action="#">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Message.." required></textarea>
                <button type="submit">Send message</button>
            </form>
                
            <div className={classes.ContactIcons}>
                <FaInstagramSquare color='white' size='30px' style={{padding:'1%'}}
                onClick={handleURL('https://www.instagram.com/shendmjekiqi/')} />
                <FaGithub color='white' size='30px' style={{padding:'1%'}}
                onClick={handleURL('https://github.com/ShendMjekiqi')} />
            </div>
        </div>
     );
}
 
export default Contact;