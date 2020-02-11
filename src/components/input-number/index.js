import React from 'react';
import s from './index.module.css';
import pt from 'prop-types';
import withFilterInput from '../../hocs/withFilterInput';

class InputNumber extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input
                className={s.input}
                value={this.props.value}
                onChange={this.props.onChange}
                type="text"
                id={this.props.id}
                name={this.props.name}
            />
        )
    }
}

InputNumber.propTypes = {
    updatePriceFilter: pt.func,
    value: pt.node,
    id: pt.string,
    name: pt.string
};

export default withFilterInput(InputNumber);