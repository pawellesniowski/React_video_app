// to translate jsx to javascript we need to import React.
import React, {Component} from 'react';


class SearchBar extends Component{
    // every React component that we create, 
    //that is class based has to have a render method:
    render() { // syntax for method in the classes
        return <input onChange={(event)=>console.log(event.target.value)}/>;
    }
    // onInputChange(event){
    //     console.dir(event);
    // }
}

//export code:
export default SearchBar;