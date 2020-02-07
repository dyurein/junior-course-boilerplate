import React from 'react';
import s from './index.module.css';
import pt from 'prop-types';
import LogRender from '../log-render';


class PriceFilter extends LogRender {
    constructor(props, context) {
        super(props, context);

        this.refMinPrice = React.createRef();
        this.refMaxPrice = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.originalMinPrice = this.props.minPrice;
        this.originalMaxPrice = this.props.maxPrice;
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const minPriceParsed = this.priceParse(this.refMinPrice.current.value, this.originalMinPrice);
        const maxPriceParsed = this.priceParse(this.refMaxPrice.current.value, this.originalMaxPrice);
        this.props.updatePriceFilter(minPriceParsed, maxPriceParsed);
        this.refMinPrice.current.value = minPriceParsed;
        this.refMaxPrice.current.value = maxPriceParsed;
    }

    priceParse(price, defaultPrice) {
        const string = price.replace(/\D/, '');
        const toNumberPrice = Number(string);
        if (price.length === 0 || isNaN(toNumberPrice) || toNumberPrice < 0) {
            return defaultPrice;
        }

        return toNumberPrice;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={s.rangeWrapper}>
                <h2 className={s.title}>Цена</h2>
                <div className={s.prices}>
                    <div className={s.price}>
                        <label className={s.rangeText} htmlFor="min-price">от</label>
                        <input
                            className={s.rangePrice}
                            id="min-price"
                            defaultValue={this.originalMinPrice}
                            ref={this.refMinPrice}
                            type="text"
                        />
                    </div>
                    <div className={s.price}>
                        <label className={s.rangeText} htmlFor="max-price">до</label>
                        <input
                            className={s.rangePrice}
                            id="max-price"
                            defaultValue={this.originalMaxPrice}
                            type="text"
                            ref={this.refMaxPrice}
                        />
                    </div>
                </div>
                <button className={s.button}>Применить</button> 
            </form> 
        )
    }
}

PriceFilter.propTypes = {
    minPrice: pt.number,
    maxPrice: pt.number,
    updatePriceFilter: pt.func
};

export default PriceFilter;