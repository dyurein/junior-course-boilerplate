import React from 'react';
import s from './index.module.css';
import products from '../../products.json';
import ProductItem from 'csssr-school-product-card';
import LogRender from '../log-render';

const ratingComponent = ({ isFilled }) => {
    return <div className={isFilled ? 'starFill' : ''} />
};

class List extends LogRender {
    constructor(props) {
        super(props);
    }

    render() {
        const filteredProducts = products.filter(item => item.price >= this.props.minPrice && item.price <= this.props.maxPrice);
        
        return (
            <>
            {filteredProducts.map((item, index) => 
                <li className={s.listItem} key={index}>
                    <ProductItem
                        key={item.id}
                        title={item.name}
                        img={item.imgProduct}
                        price={item.price + '₽' + '  '}
                        subPriceContent={item.subPrice + '₽'}
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

export default List;
