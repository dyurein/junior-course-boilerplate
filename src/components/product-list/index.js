import React from 'react';
import pt from 'prop-types';
import s from './index.module.css';
import List from '../../components/list';
import products from '../../products';

class ProductsList extends React.Component {
    render() {
        let {
            filters: {
                minPrice,
                maxPrice,
                discount,
                categories,
            }
        } = this.props
        
        const filteredProducts = products.filter(item =>
                (discount >= 0 && discount <= (100 - (item.price * 100 / item.subPrice)))
                &&
                (item.price >= minPrice && item.price <= maxPrice)
                &&
                (categories.includes(item.category)));

        return (
            <ul className={s.productList}>
                <List filteredProducts={filteredProducts}/>
            </ul>
        )
    }
};

ProductsList.propTypes = {
    children: pt.node.isRequired
};

export default ProductsList;
