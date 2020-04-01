import { createStore } from 'redux'
import products from '../products'
import { minBy, maxBy } from 'csssr-school-utils';
import { filtersReducer } from './reducers'

const jsonProductCategories = products.map(item => item.category);
const productCategories = [...new Set(jsonProductCategories)];

export const initialState = {
    filters: {
        minPrice: minBy(obj => obj.price, products).price,
        maxPrice: maxBy(obj => obj.price, products).price,
        discount: 0,
        categories: productCategories
    },
    allCategories: productCategories
};

export const store = createStore(filtersReducer, initialState);