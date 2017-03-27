import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Loader from './Loader';
import {loadPageComments} from '../AC';

class Comments extends Component {

    render() {
        const {comments, loadingComments, loaded, match, loadPageComments} = this.props;

        if (!loadingComments && !loaded) {
            loadPageComments(match.params.id);
            return null;
        }

        if (typeof loadingComments === 'undefined') return null;
        if (loadingComments) return <Loader />;

        const commentItems = comments.map(id => <li key={id}><Comment id={id} /></li>);

        return (
            <div>
              <ul>
                {commentItems}
              </ul>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;

    return {
        loadingComments: state.comments.getIn(['paginationLoad', id, 'loading']),
        loaded: state.comments.getIn(['paginationLoad', id, 'loaded']),
        comments: state.comments.getIn(['paginated', id])
    };
};

const ConnectedComments = connect(mapStateToProps, {loadPageComments})(Comments);

class PaginatedComments extends Component {
    static propTypes = {

    };

    render() {
        const {match} = this.props;
        return (
            <div>
              <Route path={`${match.url}/:id`} component={ConnectedComments} />
            </div>
        );
    }

}

export default PaginatedComments;
