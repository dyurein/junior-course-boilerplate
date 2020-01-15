import React from 'react';
import s from './index.module.css';

const ProductList = (props) => {
    return (
        <>
            <ul className={s.productList}>
                {props.children}
            </ul>
        </>
    )
};

export default ProductList;