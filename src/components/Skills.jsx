import "../styles/Skills.css";
import { skillsFront, skillsBack, tools, dataBase } from "../info/habilidades";

const Skills = () => {
  return (
    <section className="content">
      <h1 className="title-skills">Habilidades</h1>
      <div className="container-skills">
        <div className="card-skills">
          <h3 className="title-card">Frontend</h3>
          <ul className="list-skills">
            {skillsFront.map((skill) => (
              <li className="skill" key={skill.name}>
                <img src={skill.url} alt={skill.name} />
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-skills">
          <h3 className="title-card">Backend</h3>
          <ul className="list-skills">
            {skillsBack.map((skill) => (
              <li className="skill" key={skill.name}>
                <img src={skill.url} alt={skill.name} />
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-skills">
          <h3 className="title-card">Tools</h3>
          <ul className="list-skills">
            {tools.map((skill) => (
              <li className="skill" key={skill.name}>
                <img src={skill.url} alt={skill.name} />
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-skills">
          <h3 className="title-card">Data Base</h3>
          <ul className="list-skills">
            {dataBase.map((skill) => (
              <li className="skill" key={skill.name}>
                <img src={skill.url} alt={skill.name} />
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
