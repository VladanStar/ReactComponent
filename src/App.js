import React, { Component } from "react";
import PersonList from "./PersonList";
import "./App.css";
import NewPerson from "./NewPerson";
class App extends Component {
  state = {
    data: [
      {
        name: "Vladan",
        lastName: "Cupric",
        job: "developer",
        language: "JavaScript",
        gender: "male",
        id: "1",
      },
      {
        name: "Stefan",
        lastName: "Kostov",
        job: "developer",
        language: "Java",
        gender: "male",
        id: "2",
      },
      {
        name: "Dragan",
        lastName: "Ikanovic",
        job: "developer",
        language: "PHP",
        gender: "male",
        id: "3",
      },
      {
        name: "Ivan",
        lastName: "Josevski",
        job: "developer",
        language: "JavaScript",
        gender: "male",
        id: "4",
      },
      {
        name: "Cedomir",
        lastName: "Tomicic",
        job: "developer",
        language: "C++",
        gender: "male",
        id: "5",
      },
      {
        name: "Boris",
        lastName: "Jovkovic",
        job: "developer",
        language: "Java",
        gender: "male",
        id: "6",
      },
      {
        name: "Aleksandar",
        lastName: "Misic",
        job: "developer",
        language: "JavaScript",
        gender: "male",
        id: "7",
      },
      {
        name: "Aleksandar",
        lastName: "Misic",
        job: "developer",
        language: "JavaScript",
        gender: "male",
        id: "7",
      },
    ],
  };
  insertNewPerson = (person) => {
    person.id = Math.floor(Math.random(10000-10)+10);
   
   this.setState({
     data:[...this.state.data,person]
   })
  };

  deletePerson = (id)=>{
let filterData =  this.state.data.filter(el=>{
  
  return el.id !==id;
})
  this.setState({
  data:filterData
})

  }

  render() {
    return (
      <div>
        <PersonList deletePerson ={this.deletePerson} data={this.state.data} />
        <NewPerson insertNewPerson={this.insertNewPerson} />
      </div>
    );
  }
}
export default App;
