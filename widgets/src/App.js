import React,{ useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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
// const returnApp = () =>
// {
    

//     return(
//         <div>
//             <Accordion items={items} />
//             <Search />
//             <Dropdown options={options}/>
//         </div>
//     );
// };

const App = () =>
{
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>
            Toggle Dropdown
            </button>
        {showDropdown ? (
            <Dropdown
             selected={selected}
             onSelectedChange={setSelected}
            options={options}
            />
        ) : null}
    </div>
  );

};

export default App;

