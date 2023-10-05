/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import Accordion from './Accordion';

const CardFormacion = ({
  title,
  academyName,
  academyLink,
  items,
  linkCertificados,
  linkTutor,
  tutorName,
}) => {
  return (
    <div className="about-card-container">
      <header className="about-card-header">
        <h3 className="about-card-title">{title}</h3>

        <NavLink className="about-card-footer-link" to={academyLink}>
          <h4 className="about-card-academy-name">{academyName}</h4>
        </NavLink>
      </header>
      <section className="about-card-body">
        <h4 className="about-card-body-title">Tecnologias aprendidas</h4>
        <ul>
          <Accordion items={items} />
        </ul>
      </section>
      <footer className="about-card-footer">
        <NavLink className="about-card-footer-link" to={linkCertificados}>
          <span>Certificados</span>
        </NavLink>
        <NavLink to={linkTutor}>
          <p>
            Tutor: <span className="about-card-footer-link">{tutorName}</span>
          </p>
        </NavLink>
      </footer>
    </div>
  );
};

export default CardFormacion;
