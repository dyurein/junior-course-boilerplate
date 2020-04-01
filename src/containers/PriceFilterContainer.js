import { connect } from 'react-redux';
import PriceFilter from '../components/price-filter';

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        allCategories: state.allCategories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterActions: {
            updatePriceFilter: (minPrice, maxPrice) => dispatch({
                type: 'UPDATE_PRICE',
                data: {
                    minPrice: minPrice,
                    maxPrice: maxPrice
                }
            }),
            updateDiscountFilter: (discount) => dispatch({
                type: 'UPDATE_DISCOUNT',
                data: {
                    discount: discount
                }
            }),
            updateCategoryFilter: (category) => dispatch({
                type: 'UPDATE_CATEGORIES',
                data: {
                    category: category
                }
            }),
            resetFilters: () => dispatch({
                type: 'RESET_FILTERS'
            })
        }
    }
}

const PriceFilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PriceFilter);

export default PriceFilterContainer;