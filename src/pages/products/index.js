import React from 'react';
import PageTitle from '../../components/title';
import ProductList from '../../components/product-list';
import ProductItem from '../../components/product-card';
import data from '../../products.json';
import s from './index.module.css';

const ratingComponent = ({ isFilled }) => {
    return <div className={isFilled ? 'starFill' : undefined} />;
};

const ProductPage = () => {
    return (
        <>
            <PageTitle title={'Список товаров'}/>
            <ProductList>
            {data.slice(0, 3).map((item)=>
                <ProductItem isInStock={item.isInStock}
                             img={item.imgProduct}
                             title={item.name}
                             key={item.id}
                             price={item.price}
                             subPriceContent={item.subPriceContent}
                             maxRating={5}
                             rating={4}
                             ratingComponent={ratingComponent}
                             className={s.productItem}
              />
            )}
            </ProductList>
        </>
    )
};

export default ProductPage;