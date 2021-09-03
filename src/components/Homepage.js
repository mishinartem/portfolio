import {BrowserRouter, Route, Switch}
from "react-router-dom"
import {FaVk, FaGitlab, FaTelegramPlane} from "react-icons/fa"
import photo from '../photo.jpg';
 
 
const Homepage  = () => {
    return (
      <section className="homepage"> 
          <div className="overlay"> <img className="photo" src={photo}  />
     <h1>Артём Мишин</h1>
     <p>Front-End разработчик</p>
     <ul>
         <li><a href="https://vk.com/tyomabasic" target="_blank" rel="noopenner noreferrer"><FaVk /></a></li>
         <li><a href="https://t.me/artem_bekker" target="_blank" rel="noopenner noreferrer"><FaTelegramPlane /></a></li>
         <li><a href="https://gitlab.com/diablerobrujo" target="_blank" rel="noopenner noreferrer"><FaGitlab /></a></li>
    </ul>
    
    </div>
     </section>
    )
  }

  export default Homepage