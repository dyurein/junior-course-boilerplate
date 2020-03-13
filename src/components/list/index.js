import React from 'react';
import s from './index.module.css';
import pt from 'prop-types';
import ProductItem from 'csssr-school-product-card';
import LogRender from '../log-render';
import { formatMoney } from 'csssr-school-utils';

const ratingComponent = ({ isFilled }) => {
    return <div className={isFilled ? 'starFill' : ''} />
};

class List extends LogRender {
    formatPrice = (number) => {
        return formatMoney(number, 0, '.', ' ') + ' ₽';
    }
    
    render() {
        return (
            <>
            {this.props.filteredProducts.map((item, index) => 
                <li className={s.listItem} key={index}>
                    <ProductItem
                        key={item.id}
                        title={item.name}
                        img={item.imgProduct}
                        price={this.formatPrice(item.price)}
                        subPriceContent={this.formatPrice(item.subPrice)}
                        isInStock={item.isInStock}
                        rating={item.rating}
                        maxRating={item.maxRating}
                        ratingComponent={ratingComponent}
                    />
                </li>
            )}
            </>
        )
    }
}

List.propTypes = {
    minPrice: pt.number,
    maxPrice: pt.number,
    discount: pt.number,
    categories: pt.array,
    updatePriceFilter: pt.func
};

export default List;
