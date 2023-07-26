import "../styles/Proyectos.css";
import proyectos from "../info/proyectos";

const Proyectos = () => {
  return (
    <div className="projects">
      <h2 className="projects-title">Proyectos</h2>
      <ul className="projects-container">
        {proyectos.map((pj, index) => (
          <li className="project-card" key={index}>
            <img className="above" src={pj.image} alt={pj.title} />

            <div className="middle">
              <h3>{pj.title}</h3>
              <p>{pj.description}</p>
              <span>{pj.techs}</span>
            </div>

            <div className="below">
              <div className="code">
                <a
                  className="button"
                  href={pj.code}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github"></i> Ver codigo
                </a>
              </div>
              <div className="preview">
                <a
                  className="button"
                  href={pj.preview}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-display"></i> Ver proyecto
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Proyectos;
