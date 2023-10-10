import React from 'react';
import '../styles/Section.css'

function Section({ title, content, imageSrc, className }) {
  return (
    <section className={className}>
      <div className='div-text'>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <img src={imageSrc} alt="Imagen" />
    </section>
  );
}

export default Section;
