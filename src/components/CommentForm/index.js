import React, { Component, PropTypes } from 'react';

import './style.css';

class CommentForm extends Component {
    static propTypes = {
        maxLengths: PropTypes.shape({
            user: PropTypes.number,
            comment: PropTypes.number
        })
    }

    state = {
        user: '',
        comment: ''
    }

    render () {
        const { user, comment } = this.state;

        return (
            <form>
              <label className='react-comment-form-input'>
                Name:
                <input type='text' value={user} onChange={this.handleChange('user')} />
              </label>
              <label className='react-comment-form-input'>
                Comment:
                <textarea value={comment} onChange={this.handleChange('comment')} />
              </label>
              <input type='submit' value='Submit' />
            </form>
        );
    }

    handleChange = type => ev => {
        if (ev.target.value.length > this.props.maxLengths[type]) return;
        this.setState({ [type]: ev.target.value });
    }
}

export default CommentForm;
