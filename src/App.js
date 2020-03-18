import React from 'react';
import './App.scss';


class App extends React.Component {

    render() {
        let name = ["crazyming", "ming2", "ming3"];
        const vUl = <ul>{name.map((name, index) => <li key={index}>{name}</li>)} </ul>
        return (<div>
            {vUl}
        </div>)
    }

}


export default App;
