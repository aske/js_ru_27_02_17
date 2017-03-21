import {normalizedArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT_TO_ARTICLE} from '../constants';

export default (state = normalizedArticles, action) => {
    const { type, payload } = action;

    switch (type) {
        case DELETE_ARTICLE:
          return state.filter(article => article.id !== payload.id);

        case ADD_COMMENT_TO_ARTICLE:
          const { commentId, articleId } = payload;
          return state.map(article =>
                           article.id == articleId
                           ? {...article, comments : article.comments.concat(commentId)}
                           : article
                          );
    }

    return state;
}
