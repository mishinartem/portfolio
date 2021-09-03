import react from '../react.svg';
import  html from '../html.svg';
import  css from '../css.svg';
import  js from '../js.svg';
import  node from '../node.svg';
import  python from '../python.svg';
import  vue from '../vue.svg';
 
const Skills = () => {
    return (
        <section className="homepage"> 
        <div className="overlay"> 
   <h1>Скилы</h1>
   <ul>
   <li><img className="logo" src={html}  /></li>
   <li><img className="logo" src={css}  /></li>
   <li><img className="logo" src={js}  /></li>
  <li><img className="logo" src={react}  /></li>
  <li><img className="logo" src={vue}  /></li>
  <li><img className="logo" src={node}  /></li>
  <li><img className="logo" src={python}  /></li>
  
  </ul>
  </div>
   </section>
    )
  }

  export default Skills;