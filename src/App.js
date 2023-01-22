import './App.css';
import GeneratorPassword from './generadorContraseñas/GeneratorPassword';

function App() {
  return (
    <div className="App">
      <h1 className="titulo">Genera una contraseña 💻</h1>
     <GeneratorPassword/>
     <h1 className="about">Sobre mi 😄</h1>
     <div className="Logos_container">
      <a href="https://github.com/EmaPaul" target="_blank" rel="noreferrer" className="logos" ><img alt="github" src="https://res.cloudinary.com/dltjb3yhc/image/upload/v1674423664/redes/github-logo_icon-icons.com_73546_nxawsv.png" width="50" height="50"/></a>
      <a href="https://www.linkedin.com/in/emmanuel-pa%C3%BAl-carrillo-carpio/" target="_blank" rel="noreferrer" className="logos"><img alt="linkedin" src="https://res.cloudinary.com/dltjb3yhc/image/upload/v1674424605/redes/linkedin_icon-icons.com_65929_zncfhd.png" width="50" height="50"/></a>
      <a href="mailto:enmanuelpaulcarrillo.rakata900@gmail.com" target="_blank" rel="noreferrer" className="logos"><img alt="Gmail" src="https://res.cloudinary.com/dltjb3yhc/image/upload/v1674425126/redes/gmail_new_logo_icon_159149_uez8cb.png" width="50" height="50"/></a>
      <a href="https://twitter.com/carrillo_carpio" target="_blank" rel="noreferrer" className="logos"><img alt="Twitter" src="https://res.cloudinary.com/dltjb3yhc/image/upload/v1674425312/redes/Twitter_icon-icons.com_66803_gem2ht.png" width="50" height="50"/></a>
      <a href="https://www.instagram.com/ema_paul6/" target="_blank" rel="noreferrer" className="logos"><img alt="Instagram" src="https://res.cloudinary.com/dltjb3yhc/image/upload/v1674425536/redes/iconfinder-social-media-applications-3instagram-4102579_113804_r51wy8.png" width="50" height="50"/></a>
      <a href="https://portafolio-ema-paul.vercel.app/" target="_blank" rel="noreferrer"  className="logos"><img alt="Instagram" src="https://res.cloudinary.com/dltjb3yhc/image/upload/v1674425790/redes/3643772-archive-archives-document-folder-open_113445_szrecr.png" width="50" height="50"/></a>
     </div>
    </div>
  );
}

export default App;
