import React,{ useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate'; 

const items = [
    {
        title: 'Iron Man',
        content: 'Genius, Billionaire, Playboy, Philanthropist'
    },
    {
        title: 'Captain America',
        content: 'Avennngersssss, Asssssemmmble!!'
    },
    {
        title: 'Thor',
        content: 'Bring... Meeee.... Thanoooooossss !!!!'
    },
];

const options = [
    {
        label: 'The Shield',
        value: 'Rogers'
    },
    {
        label: 'The Suit',
        value: 'Tony Stark'
    },
    {
        label: 'The Magic',
        value: 'Wanda'
    }
];

const App = () =>
{
    return (
    <div>
        <Translate />
    </div>
  );

};

export default App;

