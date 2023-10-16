import React, { useState } from "react";

const ProjectPreview = ({ route, imageSrc, imageAlt, title }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`card ${hovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={route}>
        <img src={imageSrc} alt={imageAlt} className="card__image" />
        <h3 className={`card__title ${hovered ? "hidden" : ""}`}>{title}</h3>
        <p className={`hover-text ${hovered ? "" : "hidden"}`}>
          Learn more about {title}
        </p>
      </a>
    </div>
  );
}

export default ProjectPreview;
