import { minBy, maxBy } from 'csssr-school-utils';

import {initialState} from '../store'
import products from '../products';


export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PRICE': {
            return {
                ...state.filters,
                minPrice: action.data.minPrice,
                maxPrice: action.data.maxPrice
            }
        }
        case 'UPDATE_DISCOUNT': {
            return {
                ...state.filters,
                discount: action.data.discount
            }
        }
        case 'UPDATE_CATEGORIES': {
            let updatedCategories = [...state.filters.categories];
            const categoryIndex = state.filters.categories.indexOf(action.data.category);
            if (categoryIndex !== -1) {
                updatedCategories.splice(categoryIndex, 1);
                
            } else {
                updatedCategories.push(action.data.category);
            }

            return {
                ...state.filters,
                categories: updatedCategories
            }

            // const url = updatedCategories.join(',');
            // window.history.replaceState({url}, 'category', url);
        }
        case 'RESET_FILTERS': {
            return {
                ...state.filters,
                minPrice: minBy(obj => obj.price, products).price,
                maxPrice: maxBy(obj => obj.price, products).price,
                discount: 0,
                categories: this.state.allCategories
            }
        }
        default: {
            return state;
        }
    }
}