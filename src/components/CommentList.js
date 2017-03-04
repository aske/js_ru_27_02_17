import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: true
    };
  }

  render() {
    const {comments} = this.props;
    const {isOpen} = this.state;

    if (!comments.length) {
      return null;
    };
    
    const commentComponents = isOpen ? comments.map(comment =>
      <li key={comment.id}>
        <Comment comment={comment}/>
      </li>
    ) : null;

    const commentsHeader = isOpen ? 'Comments:' : 'Comments (click to show)';

    return (
      <div>
        <h3 onClick={this.handleClick}>{commentsHeader}</h3>
          <ol>
            {commentComponents}
          </ol>
      </div>
    );
  }

  handleClick = (event) => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}

export default CommentList;
