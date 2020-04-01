import React from 'react';
import PageTitle from '../../components/title';
import s from './index.module.css';
import pt from 'prop-types';

import PriceFilterContainer from '../../containers/PriceFilterContainer';
import ProductsListContainer from '../../containers/ProductsListContainer';

class ProductsPage extends React.Component {
    
    render() {
        return (
            <>
                <PageTitle title={'Список товаров'}/>
                <div className={s.contentWrapper}>
                    <PriceFilterContainer />
                    <ProductsListContainer />
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
