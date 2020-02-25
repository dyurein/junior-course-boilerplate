import React from 'react';
import ProductList from '../../components/product-list';
import PageTitle from '../../components/title';
import s from './index.module.css';
import pt from 'prop-types';
import PriceFilter from '../../components/price-filter';
import List from '../../components/list';
import FilterContext from '../../contexts/filter-context';

class ProductsPage extends React.Component {
    
    render() {
        return (
            <>
                <PageTitle title={'Список товаров'}/>
                <div className={s.contentWrapper}>
                    <FilterContext.Provider value={{
                            filters: this.props.filters,
                            allCategories: this.props.allCategories,
                            filterActions: {
                                updatePriceFilter: this.props.updatePriceFilter,
                                updateDiscountFilter: this.props.updateDiscountFilter,
                                updateCategoryFilter: this.props.updateCategoryFilter,
                                resetFilters: this.props.resetFilters
                            }
                        }}>
                            <PriceFilter />
                    </FilterContext.Provider>
                    <ProductList>
                        <List filteredProducts={this.props.filteredProducts}/>
                    </ProductList>
                </div>
            </> 
        )
    }
}

ProductsPage.propTypes = {
    isFilled: pt.bool,
    updatePriceFilter: pt.func,
    minPrice: pt.number,
    maxPrice: pt.number,
    discount: pt.number,
    categories: pt.array
};

export default ProductsPage;
