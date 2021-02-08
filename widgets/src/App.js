import React from 'react';
import Accordion from './components/Accordion';

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

const returnApp = () =>
{
    return(
        <div>
            <Accordion items={items} />
        </div>
    );
};

export default returnApp;

