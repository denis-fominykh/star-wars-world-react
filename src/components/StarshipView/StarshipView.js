import React from 'react';

export const StarshipView = ({ starship }) => {
  const { id, name, model, passengers, crew } = starship;

  return (
    <React.Fragment>
      <img className="person-image"
             src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
             alt="planet"
        />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Model:</span>
            <span>{model}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Passengers:</span>
            <span>{passengers}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Crew:</span>
            <span>{crew}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
