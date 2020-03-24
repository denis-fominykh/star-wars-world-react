import React from 'react';

export const PlanetView = ({ planet }) => {
  const { id, name, population, diameter, rotationPeriod } = planet;

  return (
    <React.Fragment>
      <img className="person-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
             alt="planet"
        />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population:</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter:</span>
            <span>{diameter}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation period:</span>
            <span>{rotationPeriod}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
