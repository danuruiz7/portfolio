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
              Desarrollador Full Stack con experiencia en Front-end utilizando
              tecnologías como <strong>HTML, CSS, JavaScript y React,</strong>{' '}
              incluyendo TypeScript. En el Back-end, tengo sólidos conocimientos
              en Node.js, Express.js y Python con Django Rest Framework, además
              de experiencia en bases de datos como PostgreSQL y MySQL. También
              soy competente en el uso de Git y GitHub para el control de
              versiones y colaboración en equipo. Con casi un año de
              experiencia, he adquirido la mayoría de mis habilidades de forma
              autodidacta. Estoy comprometido con la excelencia en el desarrollo
              web y siempre estoy ansioso por enfrentar nuevos desafíos y
              aprender continuamente..
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
