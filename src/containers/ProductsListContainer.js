import { connect } from 'react-redux';
import ProductsList from '../components/product-list';


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

const ProductsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsList);

export default ProductsListContainer;