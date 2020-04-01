import { connect } from 'react-redux';
import ProductsPage from '../pages/products';


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

const ProductPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsPage);

export default ProductPageContainer;