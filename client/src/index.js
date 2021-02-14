import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import './index.scss'

const App = () => {
    return (
        <div className="main">
            <Navigation />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));