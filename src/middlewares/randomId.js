import { ADD_COMMENT } from '../constants';
import { addCommentToArticle, addCommentToStore } from '../AC';

export default store => next => action => {
    const { type, payload } = action;
    switch (type) {
    //через мидлвары будет проходить каждый экшин, они должны быть максимально общими, завязывать на конкретные экшины - плохая практика
    case ADD_COMMENT:
        const randomId = Math.floor((Math.random()) * 100000);
        //не надо диспатчить 2 экшина, ты можешь реагировать на один в нескольких редюсерах
        //лучше используй next, зачем store.dispatch?
        store.dispatch(addCommentToStore(payload.comment, randomId));
        store.dispatch(addCommentToArticle(payload.articleId, randomId));
    }
    next(action);
}
