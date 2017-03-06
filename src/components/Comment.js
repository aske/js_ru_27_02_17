import React, {Component} from 'react';

//Это можно сделать Functional Component, по возможности используй их
class Comment extends Component {

  render() {
    const {comment} = this.props;

    return (
      <div>
        <b>{comment.user}:</b>
        <p>{comment.text}</p>
      </div>
    );
  }
}

export default Comment;
