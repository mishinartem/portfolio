import {BrowserRouter, Route, Switch}
from "react-router-dom"
import './App.css';
import Homepage  from "./components/Homepage";
import Menu  from "./components/Menu";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
     <Menu />
    <Route path="/" exact>
      
   <Homepage />
   </Route>

   <Route path="/skills">
   <Skills />
   </Route>

   <Route path="/projects">
   <Projects />
   </Route>
 
   <Route path="/contacts">
   <Contacts />
   </Route>

   <Route path="*">
   <Error />
   </Route>
   </BrowserRouter>
  );
}
export default App
