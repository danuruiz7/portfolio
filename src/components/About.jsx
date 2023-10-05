import '../styles/About.css';
import CardFormacion from './CardFormacion';
import { formacion } from '../info/Formacion';

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">Cursos y Certicado</h2>
      {formacion.map((item) => (
        <CardFormacion
          key={item.id}
          title={item.title}
          academyName={item.academy.name}
          academyLink={item.academy.link}
          tutorName={item.tutor.name}
          items={item.items}
          linkCertificados={item.certificados}
          linkTutor={item.tutor.link}
        />
      ))}
    </section>
  );
};

export default About;
