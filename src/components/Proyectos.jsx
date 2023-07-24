import "../styles/Proyectos.css";
import fotoweather from "../img/1-wheather-app.png";

const proyectos = [
  {
    title: "Wheather App",
    description:
      "Proyecto realizado con React JS, utilizando el método fetch para llamar a la API de WeatherAPI y obtener datos meteorológicos en tiempo real.",
    techs: "React JS, Css, API",
    image:
      "https://github.com/danuruiz7/WeatherApp/blob/main/public/wheather-app.png?raw=true",
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

    preview: "https://liramotors.netlify.app",
  },
  {
    title: "Wheather App",
    description:
      "Proyecto realizado con React JS, utilizando el método fetch para llamar a la API de WeatherAPI y obtener datos meteorológicos en tiempo real.",
    techs: "React JS, Css, API",
    image:
      "https://github.com/danuruiz7/WeatherApp/blob/main/public/wheather-app.png?raw=true",
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

    preview: "https://liramotors.netlify.app",
  },
];

const Proyectos = () => {
  return (
    <div className="projects">
      <h2 className="projects-title">Proyectos</h2>
      <div className="projects-container">
        {proyectos.map((pj) => (
          <div key={pj.title} className="project-card">
            <img src={pj.image} alt={pj.title} />
            <h3 className="project-title">{pj.title}</h3>
            <p className="project-description">{pj.description}</p>
            <span className="project-techs">{pj.techs}</span>
            <div className="project-links">
              <a href={pj.code} target="_blank" rel="noreferrer">
                Ver Codigo
              </a>
              <a href={pj.preview} target="_blank" rel="noreferrer">
                Ver proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
