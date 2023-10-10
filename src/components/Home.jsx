import fotoProfile from '../img/profile.png';
import '../styles/Home.css';
import Proyectos from './Proyectos';

const Home = () => {
  return (
    <section className="content">
      <h1 className="title">Daniel Ruiz</h1>
      <div className="info">
        <div className="card">
          <article className="card-body">
            <h3 className="card-title">Sobre mi</h3>
            <p className="card-description">
              Desarrollador frontend con conocimientos en el desarrollo backend
              y bases de datos. Mi trayectoria abarca casi un año en el mundo de
              la programación, con gran parte de mi formación adquirida de forma
              autodidacta. Disfruto enfrentar y superar nuevos retos, y me gusta
              trabajar en equipo e intercambiar ideas.
            </p>
            <a
              className="card-button"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/daniel-elias-ruiz-medina/"
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
