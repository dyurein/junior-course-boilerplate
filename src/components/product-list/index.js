import React from 'react';
import pt from 'prop-types';
import s from './index.module.css';

class ProductList extends React.Component {
    render() {
        return (
            <ul className={s.productList}>
                {this.props.children}
            </ul>
        )
    }
};

ProductList.propTypes = {
    children: pt.node.isRequired
};

export default ProductList;
