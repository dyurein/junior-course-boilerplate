import React from 'react';
import ReactDOM from 'react-dom';
import ProductPage from './pages/products';
import s from './index.module.css';


const App = () => {
    return (
        <div className={s.wrapper}>
            <ProductPage />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);