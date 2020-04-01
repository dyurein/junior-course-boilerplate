import React from 'react';
import ReactDOM from 'react-dom';
import s from './index.module.css';
import ProductsPageContainer from './containers/ProductsPageContainer';
import { Provider } from 'react-redux'
import { store } from  './store';



class App extends React.Component {
    render() {
        return (
            <div className={s.wrapper}>
                <ProductsPageContainer />
            </div>
        )
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);
