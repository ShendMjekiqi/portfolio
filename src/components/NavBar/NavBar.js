import classes from './NavBar.module.css';
const NavBar = () => {
    return ( 
        <div className={classes.NavBar}>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default NavBar;
