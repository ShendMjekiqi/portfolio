import classes from './Skills.module.css';
import codethinking from '../../img/codethinking.jpg';


const listTitleStyle={fontWeight:900, color:'#98B1FE8',marginBottom:'4px'}
const backendSkills=
    <ul>
        <li style={listTitleStyle}>BACKEND</li>
        <li>Java-MSSQL</li>
        <li>PHP-MYSQL</li> 
    </ul>
const frontendSkills=
    <ul>
        <li style={listTitleStyle}>FRONTEND</li>
        <li>ReactJS-HTML-CSS</li>
    </ul>
const messagingSkills=
    <ul>
        <li style={listTitleStyle}>MESSAGIN</li>
        <li>ActiveMQ</li>
    </ul>
const dataScienceSkills=
    <ul>
        <li style={listTitleStyle}>DATA SCIENCE TOOLS</li>
        <li>Example- Exapmle</li>
    </ul>
const buildToolsSkills=
    <ul>
        <li style={listTitleStyle}>BUILD TOOLS</li>
        <li>Example-Exapmle</li>
    </ul>
const otherSkills=
    <ul>
        <li style={listTitleStyle}>OTHER</li>
        <li>Git-Json-XML</li>
    </ul>
const totalSkills=[backendSkills,frontendSkills,messagingSkills,dataScienceSkills,buildToolsSkills, otherSkills]
const Skills = () => {
    return ( 
        <div className={classes.Skills} id='skills'>
             <div className={classes.Head}>
                <hr></hr>
                <h1>What about the Skills?</h1>
            </div>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <div className={classes.Container}>
                <img src={codethinking} alt="codethinking"/>
                {totalSkills.map(skills=>{
                    return(
                        <div className={classes.List}>
                            {skills}
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Skills;