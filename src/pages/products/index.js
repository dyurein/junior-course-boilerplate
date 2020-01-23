import React from 'react';
import ProductList from '../../components/product-list';
import PageTitle from '../../components/title';
import s from './index.module.css';
import pt from 'prop-types';
import PriceFilter from '../../components/price-filter';
import List from '../../components/list';


class ProductPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <PageTitle title={'Список товаров'}/>
                <div className={s.contentWrapper}>
                    <PriceFilter
                        minPrice={this.props.minPrice}
                        maxPrice={this.props.maxPrice}/>
                    <ProductList>
                        <List
                            minPrice={this.props.minPrice}
                            maxPrice={this.props.maxPrice}/>
                    </ProductList>
                </div>
            </> 
        )
    }
}

ProductPage.propTypes = {
    isFilled: pt.bool,
    updatePriceFilter: pt.func,
    minPrice: pt.number,
    maxPrice: pt.number
};

export default ProductPage;
