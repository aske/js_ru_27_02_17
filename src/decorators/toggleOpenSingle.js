import React from 'react';

export default (CustomComponent) => class DecoratedComponent extends React.Component {
    state = {
        openItemId: null
    }

    toggleOpen = openItemId => ev => {
        this.setState({
            openItemId
        });
    }

    render() {
        return <CustomComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} />;
    }
}
