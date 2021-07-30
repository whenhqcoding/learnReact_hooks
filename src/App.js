import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

const App = () => {
    return (
    <div>
        <Search />
    </div>
    );
}

export default App;