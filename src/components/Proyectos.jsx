import "../styles/Proyectos.css";
import previewImg from "../img/preview.png";

const proyectos = [
  {
    title: "Wheather App",
    description:
      "Proyecto realizado con React JS, utilizando el método fetch para llamar a la API de WeatherAPI y obtener datos meteorológicos en tiempo real.",
    techs: "React JS, Css, API",
    image:
      "https://raw.githubusercontent.com/danuruiz7/WeatherApp/main/public/preview-wahd.png",
    code: "https://github.com/danuruiz7/WeatherApp",
    preview: "https://weather-app-danudev.vercel.app",
  },
  {
    title: "Lira Motors",
    description:
      "Pagina web totalmente responsive creada con HTML, CSS, JavaScript para un taller mecanico real.",
    techs: "HTML, CSS, JavaScript",
    image:
      "https://github.com/danuruiz7/liramotorsweb/blob/main/img/preview.png?raw=true",

    code: "https://github.com/danuruiz7/liramotorsweb",

    preview: "https://liramotors.vercel.app/",
  },
  {
    title: "Portfolio",
    description: "Portfolio personal para mostrar mis proyectos y experiencias",
    techs: "React JS, React Router 6, Css",
    image: previewImg,
    code: "https://github.com/danuruiz7/portfolio/tree/main",
    preview: "#",
  },
];

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
