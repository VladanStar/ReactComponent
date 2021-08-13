import React from "react";

const Person = ({ person, deletePerson }) => {
  return (
    <div className="card" key={person.id}>
      <h3>{person.name}</h3>
      <h3>{person.lastName}</h3>
      <h3>{person.job}</h3>
      <h3>{person.language}</h3>
      <h3>{person.gender}</h3>
      <button
        className="deleteBTN"
        onClick={() => {
          deletePerson(person.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Person;
