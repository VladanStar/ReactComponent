import React from "react";
import Person from "./Person";

const PersonList = ({ data, deletePerson }) => {
  const ListOfPerson = data.map((person) => {
    return <Person deletePerson = {deletePerson} person={person} key={person.id} />;
  });
  return <div>{ListOfPerson}</div>;
};
export default PersonList;
