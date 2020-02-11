import React from 'react';

export default function withFilterInput(Component) {
        return class extends React.Component {
            constructor(props) {
                super(props);

                this.onChange = this.onChange.bind(this);
                this.handlePriceChange = this.handlePriceChange.bind(this);

                this.state = {
                    value: this.props.value
                };
            }

            handlePriceChange(event) {
                const string = event.target.value.replace(/\D/, '');
                const toNumberPrice = Number(string);
                if (toNumberPrice.length === 0 || toNumberPrice < 0 || isNaN(toNumberPrice)) {
                    this.props.onChange(0);
                    return;
                }
        
                return this.onChange(toNumberPrice);
            }

            onChange(value)  {
                this.setState({
                    value: value
                })

                this.props.onChange(value);
            };

            render() {
                return (
                    <Component
                        {...this.props}
                        value={this.state.value}
                        onChange={this.handlePriceChange} />
                )
            };
    }
}