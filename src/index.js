import React from 'react';
import ReactDOM from 'react-dom'; // deals wit browser/DOM

import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyCm0k_4aAm7vSzzZ4RWod34meZ0f8OFiQI';

//create a new component. this component should produce some Html:
const App = () => { 
    return (
        <div>
            <SearchBar />
        </div>
    );
}



// Take above component and generate Html and put it on the page / in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
