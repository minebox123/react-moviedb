import React from "react";

const List = props => {
  const { actor } = props;
  return (
    <React.Fragment>
      <ul>
        <li>
          <h4>Known For</h4>
          <p>{actor.known_for_department}</p>
        </li>
        <li>
          <h4>Gender</h4>
          <p>{actor.gender === 1 ? "Female" : "Male"}</p>
        </li>
        <li>
          <h4>Known Credits</h4>
          <p>Number</p>
        </li>
        <li>
          <h4>Birthday</h4>
          <p>{actor.birthday}</p>
        </li>

        {actor.deathday === null ? null : (
          <li>
            <h4>Day of Death</h4>
            <p>{actor.deathday}</p>
          </li>
        )}

        <li>
          <h4>Place of Birth</h4>
          <p>{actor.place_of_birth}</p>
        </li>
        <li>
          <h4>Official Site</h4>
          <p>{actor.homepage === null ? "-" : actor.homepage}</p>
        </li>
        {!Array.isArray(actor.also_known_as) ||
        !actor.also_known_as.length ? null : (
          <li>
            <h4>Also known as</h4>

            <ul>
              {actor.also_known_as.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    </React.Fragment>
  );
};

export default List;
