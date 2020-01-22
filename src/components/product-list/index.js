import React from 'react';
import pt from 'prop-types';
import s from './index.module.css';

const ProductList = (props) => {
    return (
        <ul className={s.productList}>
            {props.children}
        </ul>
    )
};

ProductList.propTypes = {
    children: pt.node.isRequired
};

export default ProductList;