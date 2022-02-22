import classes from './Home.module.css';
import image from './../../img/brackets.png';
import code from './../../img/code.png';
const Home = () => {
    return ( 
        <div className={classes.Home} id='home'>
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello, world</h1>
                <h1>Welcome to my website</h1>
            </div>
            <img className={classes.Code} src={image} alt="image" />
            <img className={classes.BinaryWorld} src={code} alt="iamge"/>
        </div>
     );
}
 
export default Home;