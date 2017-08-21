import React from 'react';
import ReactDOM from 'react-dom'; // deals wit browser/DOM

//create a new component. this component should produce some Html:
const App = () => <div>Hi!</div>;


// Take above component and generate Html and put it on the page / in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
