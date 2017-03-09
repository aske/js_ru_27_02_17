import React from 'react';

//DecoratedComponent я называл чтоб легче понять было. Лучше выбери более значущее название
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
