import React from 'react';
import s from './index.module.css';
import pt from 'prop-types';
import LogRender from '../log-render';
import InputNumber from '../input-number';
import Discount from 'csssr-school-input-discount';
import withFilterInput from '../../hocs/withFilterInput';

const FilterDiscount = withFilterInput(Discount);

class PriceFilter extends LogRender {

    constructor(props) {
        super(props);

        this.handleMinPriceChange = this.handleMinPriceChange.bind(this);
        this.handleMaxPriceChange = this.handleMaxPriceChange.bind(this);
        this.handleDiscountChange = this.handleDiscountChange.bind(this);
    }

    handleMinPriceChange(value) {
        this.props.updatePriceFilter(value, this.props.maxPrice);
    }

    handleMaxPriceChange(value) {
        this.props.updatePriceFilter(this.props.minPrice, value);
    }

    handleDiscountChange(value) {
        this.props.updateDiscountFilter(value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={s.priceFilter}>
                <div className={s.pricesWrapper}>
                    <h2 className={s.title}>Цена</h2>
                    <div className={s.prices}>
                        <div className={s.price}>
                            <label className={s.label} htmlFor="minPrice">от</label>
                            <InputNumber
                                value={this.props.minPrice}
                                id="minPrice"
                                onChange={this.handleMinPriceChange}
                                name="minPrice"/>
                        </div>
                        <div className={s.price}>
                            <label className={s.label} htmlFor="maxPrice">до</label>
                            <InputNumber
                                value={this.props.maxPrice}
                                id="maxPrice"
                                onChange={this.handleMaxPriceChange}
                                name="maxPrice"/>
                        </div>
                    </div>
                </div>
                <div className={s.discount}>
                    <FilterDiscount
                        title="Скидка"
                        name="discount"
                        value={this.props.discount}
                        onChange={this.handleDiscountChange}/>
                </div>
            </form> 
        )
    }
}

PriceFilter.propTypes = {
    minPrice: pt.number,
    maxPrice: pt.number,
    discount: pt.number,
    updatePriceFilter: pt.func,
    updateDiscountFilter: pt.func
};

export default PriceFilter;