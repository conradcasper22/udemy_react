import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props =>  {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  });

  const switchNameHandler = () => {
    // console.log("I was clicked!")
    // DON'T DO THIS: this.state.persons[0].name = "Maximillion";
    setPersonsState( {persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ]
    } )
  }

  
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbies: Racing</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }




        

export default app;



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
