import fotoProfile from "../img/profile.png";
import "../styles/Home.css";
import Proyectos from "./Proyectos";

const Home = () => {
  return (
    <section className="content">
      <h1 className="title">Daniel Ruiz</h1>
      <div className="info">
        <div className="card">
          <article className="card-body">
            <h3 className="card-title">Sobre mi</h3>
            <p className="card-description">
              Como persona proactiva, disfruto de la emoción de asumir y superar
              nuevos retos. Actualmente cuento con 2 meses de experiencia en
              programación. En mi tiempo libre hago divulgación de programación
              en internet. He formado una gran comunidad en la que desarrollamos
              proyectos open-source para estar al día con las últimas
              tecnologías y ayudar a la comunidad hispanohablante a subir su
              nivel en programación
            </p>
            <a
              className="card-button"
              target="_blank"
              // href="https://www.linkedin.com/in/danieleruizm/"
            >
              Linkedin
            </a>
          </article>
        </div>
        <img src={fotoProfile} alt="Perfil" className="card-photo" />
      </div>
      <Proyectos />
    </section>
  );
};

export default Home;
