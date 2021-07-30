import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

//JSX Live Reloading fix
if (module.hot) {
    module.hot.accept();
}