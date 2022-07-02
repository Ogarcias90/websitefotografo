import "./App.css";
import Carrousel from "./components/Carrousel/carrousel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Oscar Garcias Fotografía </h1>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Blog</li>
            <li>Galeria</li>
          </ul>
        </nav>
      </header>
      <body>
        <Carrousel />
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
