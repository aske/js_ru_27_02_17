import { ADD_COMMENT } from '../constants';
import { addCommentToArticle, addCommentToStore } from '../AC';

export default store => next => action => {
    const { type, payload } = action;
    switch (type) {
    case ADD_COMMENT:
        const randomId = Math.floor((Math.random()) * 100000);
        store.dispatch(addCommentToStore(payload.comment, randomId));
        store.dispatch(addCommentToArticle(payload.articleId, randomId));
    }
    next(action);
}
