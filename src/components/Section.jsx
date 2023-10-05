import React from 'react';

function Section({ title, content, backgroundColor, imageSrc, imagePosition, textPosition }) {
  const sectionStyle = {
    backgroundColor: backgroundColor,
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: textPosition === 'left' ? 'row' : 'row-reverse',
    alignItems: 'center',
  };

  return (
    <section style={sectionStyle}>
      <div style={contentContainerStyle}>
        <div>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        {imagePosition === 'right' && <img src={imageSrc} alt="Imagen" />}
      </div>
      {imagePosition === 'left' && <img src={imageSrc} alt="Imagen" />}
    </section>
  );
}

export default Section;
