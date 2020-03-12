import React from 'react';
import ReactDOM from 'react-dom';
import s from './index.module.css';
import ProductsPage from './pages/products';
import products from './products.json';
import maxBy from 'csssr-school-utils/lib/maxBy';
import minBy from 'csssr-school-utils/lib/minBy';



class App extends React.Component {
    constructor(props) {
        super(props);

        const jsonProductCategories = products.map(item => item.category);
        const productCategories = [...new Set(jsonProductCategories)];

        const url = productCategories.join(',');
        window.history.replaceState({url}, 'category', url);

        this.state = {
            filters: {
                minPrice: minBy(obj => obj.price, products).price,
                maxPrice: maxBy(obj => obj.price, products).price,
                discount: 0,
                categories: productCategories
            },
            allCategories: productCategories
        };
    }

    componentDidMount() {
        window.addEventListener('popstate', this.setFromHistory);
    }

    componentWillUnmount() {
        window.addEventListener('popstate', this.setFromHistory);
    }

    setFromHistory = (event) => {
        const categoriesFromUrl = event.state['url'].split(',');
        

        this.setState(prevState => ({
            filters: {
                ...prevState.filters,
                categories: categoriesFromUrl
            }
        }))
        console.log(categoriesFromUrl);
    }

    updatePriceFilter = (minPrice, maxPrice) => {
        this.setState(prevState => ({
            filters: {
                ...prevState.filters,
                minPrice: minPrice,
                maxPrice: maxPrice,
            }
        }))
    }

    updateDiscountFilter = (discount) => {
        this.setState(prevState => ({
            filters: {
                ...prevState.filters,
                discount: discount
            }
        }))
    }

    updateCategoryFilter = (category) => {
        let updatedCategories = [...this.state.filters.categories];
        const categoryIndex = this.state.filters.categories.indexOf(category);
        if (categoryIndex !== -1) {
            updatedCategories.splice(categoryIndex, 1);
            
        } else {
            updatedCategories.push(category);
        }
        
        this.setState(prevState => ({
            filters: {
                ...prevState.filters,
                categories: updatedCategories
            }
        }))

        const url = updatedCategories.join(',');
        window.history.replaceState({url}, 'category', url);
    }

    resetFilters = () => {
        this.setState({
            filters: {
                minPrice: minBy(obj => obj.price, products).price,
                maxPrice: maxBy(obj => obj.price, products).price,
                discount: 0,
                categories: this.state.allCategories
            }
        })
    }

    render() {
        let {
            filters: {
                minPrice,
                maxPrice,
                discount,
                categories,
            }
        } = this.state
        const filteredProducts = products.filter(item =>
                (discount >= 0 && discount <= (100 - (item.price * 100 / item.subPrice)))
                &&
                (item.price >= minPrice && item.price <= maxPrice)
                &&
                (categories.includes(item.category)));

        return (
            <div className={s.wrapper}>
                <ProductsPage
                    filters={this.state.filters}
                    allCategories={this.state.allCategories}
                    updatePriceFilter={this.updatePriceFilter}
                    updateDiscountFilter={this.updateDiscountFilter}
                    updateCategoryFilter={this.updateCategoryFilter}
                    resetFilters={this.resetFilters}
                    filteredProducts={filteredProducts} />
            </div>
        )
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
