import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './products';

function App() {
    return (
        <div className="goods">
            <h1 className="goods__title">Список товаров</h1>
            <ul className="goods__list">
            {data.filter((link)=> link.id <= 3).map((link)=> 
                <li className="goods__item" key={link.id}>
                    <a className="goods__item-link" href="#">
                        {link.name}
                    </a>
                </li>
            )}
            </ul>
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);