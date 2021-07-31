import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items =[
    {
        title: 'what is React?',
        content: 'React is a front end javascript framework.'
    },
    {
        title: 'Why use React?',
        content: 'React is a popular JS library in the industry.'
    },
    {
        title: 'How to use React?',
        content: 'Use React by creating components'
    }
]

/*
const App = () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
};
*/

/*
const App = () => {
    return (
    <div>
        <Search />
    </div>
    );
}
*/

const App = () => {
    const options = [
        {
            label: 'The Color Red',
            value: 'red'
        },
        {
            label: 'The Color Green',
            value: 'green'
        },
        {
            label: 'A Shade of Blue',
            value: 'blue'
        }
    ];

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Dropdown 
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            />
        </div>
    );
}

export default App;