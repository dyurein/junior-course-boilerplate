import React from 'react';
import ReactDOM from 'react-dom';
import ProductsPage from './pages/products';
import s from './index.module.css';
import products from './products.json';


class App extends React.Component {
    constructor(props) {
        super(props);

        const productPrices = products.map(item => item.price);

        this.state = {
            minPrice: Math.min(...productPrices),
            maxPrice: Math.max(...productPrices)
        };
    }

    updatePriceFilter = (minPrice, maxPrice) => {
        this.setState({
            minPrice: minPrice,
            maxPrice: maxPrice
        })
    };

    render() {
        return (
            <div className={s.wrapper}>
                <ProductsPage
                    minPrice={this.state.minPrice}
                    maxPrice={this.state.maxPrice}
                    updatePriceFilter={this.updatePriceFilter}/>
            </div>
        )
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);