import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const buttontext = 'Click Me!';
    const labelText = { text : 'Enter Name : '}

    return (
        <div>
            <label className= "label" htmlFor="name"> {labelText.text} </label>
            <input id ="name" type="text" />
            <button style={{backgroundColor:'blue',color:'white'}}>{buttontext}</button>
        </div>
    );

};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);