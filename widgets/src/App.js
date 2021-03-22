import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate'; 
import Route from './components/Route';
import Header from './components/Header';


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

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    nums.sort(function(a,b){
         return (a-b);
     });
     for(let i=0;i<nums.length;i++){
         if(nums[i]!==i){
             return i;
         }
     }
     return nums.length
     
 };

const App = () =>
{
    const [selected, setSelected] = useState(options[0]);

    return (
    <div>
        <Header />
        <Route path="/">
            <Accordion items={items}/>
        </Route>
        <Route path="/list">
            <Search/>
        </Route>
        <Route path="/dropdown">
            <Dropdown options={options} selected={selected} onSelectedChange={setSelected} label="Select your Avenger"/>
        </Route>
        <Route path="/translate">
            <Translate />
        </Route>
        
    </div>
  );

};

export default App;

