import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props =>  {
  

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies: Racing</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}



        

export default App;



// state = {
//   persons: [
//     {name: 'Max', age: 28},
//     {name: 'Manu', age: 29},
//     {name: 'Stephanie', age: 26}
//   ]
// }

// switchNameHandler = () => {
//   // console.log("I was clicked!")
//   // DON'T DO THIS: this.state.persons[0].name = "Maximillion";
//   this.setState( {persons: [
//     {name: 'Max', age: 28},
//     {name: 'Manu', age: 29},
//     {name: 'Stephanie', age: 27}
//   ]
//   } )
// }
