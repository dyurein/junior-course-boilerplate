import React, {Fragment} from 'react';
import s from './index.module.css';
import pt from 'prop-types';
import LogRender from '../log-render';
import InputNumber from '../input-number';
import Discount from 'csssr-school-input-discount';
import withFilterInput from '../../hocs/withFilterInput';
import FilterContext from '../../contexts/filter-context';

const FilterDiscount = withFilterInput(Discount);

class PriceFilter extends LogRender {

    handleMinPriceChange = (value) => {
        this.context.filterActions.updatePriceFilter(value, this.context.filters.maxPrice);
    }

    handleMaxPriceChange = (value) => {
        this.context.filterActions.updatePriceFilter(this.context.filters.minPrice, value);
    }

    handleDiscountChange = (value) => {
        this.context.filterActions.updateDiscountFilter(value);
    }

    handleCategoryChange = (event) => {
        this.context.filterActions.updateCategoryFilter(event.target.value);
    }

    handleResetChange = () => {
        this.context.filterActions.resetFilters();
    }

    render() {
        return (
            <FilterContext.Consumer>
                {context => (
                    <form onSubmit={this.handleSubmit} className={s.priceFilter}>
                    <div className={s.pricesWrapper}>
                        <h2 className={s.title}>Цена</h2>
                        <div className={s.prices}>
                            <div className={s.price}>
                                <label className={s.label} htmlFor="minPrice">от</label>
                                <InputNumber
                                    value={context.filters.minPrice}
                                    id="minPrice"
                                    onChange={this.handleMinPriceChange}
                                    name="minPrice"/>
                            </div>
                            <div className={s.price}>
                                <label className={s.label} htmlFor="maxPrice">до</label>
                                <InputNumber
                                    value={context.filters.maxPrice}
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
                            value={context.filters.discount}
                            onChange={this.handleDiscountChange}/>
                    </div>
                    <div className={s.categories}>
                        <h2 className={s.title}>Категории</h2>
                        <div className={s.categoriesWrapper}>
                            {context.allCategories.map((category, index) =>
                                <Fragment key={index}>
                                    <input
                                        id={category}
                                        value={category}
                                        className={s.categoryCheckbox}
                                        type="checkbox"
                                        defaultChecked={context.filters.categories.includes(category)}
                                        onChange={this.handleCategoryChange} />
                                    <label htmlFor={category} className={s.categoryLabel}>{category}</label>
                                </Fragment>
                            )}
                        </div>
                    </div>
                    <div className={s.resetFilters}>
                        <button className={s.resetButton} onClick={this.handleResetChange}>Сбросить фильтры</button>
                    </div>
                </form> 
                )}
            </FilterContext.Consumer>
        )
    }
}

PriceFilter.contextType = FilterContext;

PriceFilter.propTypes = {
    minPrice: pt.number,
    maxPrice: pt.number,
    discount: pt.number,
    categories: pt.array,
    updatePriceFilter: pt.func,
    updateDiscountFilter: pt.func,
    updateCategorieFilter: pt.func
};

export default PriceFilter;
