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
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const minPriceParsed = this.priceParse(this.refMinPrice.current.value);
        const maxPriceParsed = this.priceParse(this.refMaxPrice.current.value);
        const minPriceData = minPriceParsed !== null ? minPriceParsed : this.props.minPrice;
        const maxPriceData = maxPriceParsed !== null ? maxPriceParsed : this.props.maxPrice;
        
        this.props.updatePriceFilter(minPriceData, maxPriceData);
    }

    priceParse(price) {
        const string = price.replace(/\D/, '');
        const toNumberPrice = Number(string);
        if (price.length === 0 || toNumberPrice < 0) {
            return null;
        }

        return toNumberPrice;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={s.rangeWrapper}>
                <h2 className={s.title}>Цена</h2>
                <div className={s.prices}>
                    <div className={s.price}>
                        <label className={s.rangeText} htmlFor="minPrice">от</label>
                        <input
                            className={s.rangePrice}
                            id="min-price"
                            defaultValue={this.props.minPrice}
                            ref={this.refMinPrice}
                            type="text"
                        />
                    </div>
                    <div className={s.price}>
                        <label className={s.rangeText} htmlFor="max-price">до</label>
                        <input
                            className={s.rangePrice}
                            id="max-price"
                            defaultValue={this.props.maxPrice}
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
    minPrice: pt.number.isRequired,
    maxPrice: pt.number.isRequired,
    updatePriceFilter: pt.func.isRequired
};

export default PriceFilter;