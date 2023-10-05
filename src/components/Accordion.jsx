/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/Accordion.css';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={handleToggle}>
        <li>{title}</li>
        {isOpen ? (
          <i className="bi bi-caret-up-fill"></i>
        ) : (
          <i className="bi bi-caret-down-fill"></i>
        )}
      </div>
      <p className={isOpen ? 'accordion-content' : 'accordion-content hidden'}>
        {content}
      </p>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
