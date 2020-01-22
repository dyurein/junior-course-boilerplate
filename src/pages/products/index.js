import React from 'react';
import ProductList from '../../components/product-list';
import PageTitle from '../../components/title';
import data from '../../products.json';
import s from './index.module.css';
import ProductItem from 'school-product-card';


const ratingComponent = ({ isFilled }) => {
    return <div className={isFilled ? 'starFill' : undefined} />;
};

const ProductPage = () => {
    return (
        <>
            <PageTitle title={'Список товаров'}/>
            <ProductList>
            {data.map((item)=>
                <div className={s.itemWrapper}>
                    <ProductItem isInStock={item.isInStock}
                                img={item.imgProduct}
                                title={item.name}
                                key={item.id}
                                price={item.price}
                                subPriceContent={item.subPriceContent}
                                maxRating={5}
                                rating={4}
                                ratingComponent={ratingComponent}
                    />
                </div>
            )}
            </ProductList>
        </>
    )
};

export default ProductPage;
