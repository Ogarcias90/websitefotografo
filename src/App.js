
import React, {useState, useEffect} from "react";
import "./App.css";
import Carrousel from "./components/Carrousel/carrousel";
import NavBar from "./components/NavBar/NavBar";

function App() {

  const changeClassName = (id,name1,name2) =>{
    let cName = document.getElementById(id);
    cName.className = (cName.className === name2) ? name1 : name2;
  };

  const darkMode = () => {
    changeClassName('body','lightBody','darkBody')
    changeClassName('header','lightHeader','darkHeader')
  }

  return (
    <div className="App">
      <header id='header' className="lightHeader">
        <h1>Oscar Garcias Fotografía </h1>
        
      </header>
      <body id='body' className="lightBody">
        <NavBar/>
        <Carrousel />
        <div className="toggleCont">
            <div className="toggle-switch">
                <input 
                    type="checkbox" 
                    className="checkbox" 
                    name='toggle' 
                    id='toggle'
                    onInput={darkMode}
                />
                <label className="label" htmlFor='toggle'>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
      </body>
      <footer>
        <div className="socialMedia">
          <div className="facebook socialMediaIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
            </svg>
          </div>
          <div>
            <img
              className="InstaIcon socialMediaIcon"
              src={require("./imagenes/Icono/instaicon.png")}
              height="24"
              alt=""
            />
          </div>
        </div>
        <div className="copyRight"></div>
      </footer>
    </div>
  );
}

export default App;
