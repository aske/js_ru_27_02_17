import { ADD_COMMENT, LOAD_COMMENTS_BY_ARTICLE_ID, SUCCESS, FAIL, START } from '../constants'
import {arrToMap} from './utils'
import {Record, Map} from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

const DefaultReducerState = Record({
    entities: new Map({}),
    loadInfo: new Map({})
});

export default (state = new DefaultReducerState(), action) => {
    const { type, payload, randomId } = action;

    switch (type) {
    case ADD_COMMENT:
        return state.setIn(['entities', randomId], new CommentModel({
                id: randomId,
                ...payload.comment
        }));

    case LOAD_COMMENTS_BY_ARTICLE_ID + START:
        return state
            .setIn(['loadInfo', payload.articleId, 'loading'], true)
            .setIn(['loadInfo', payload.articlId, 'loaded'], false);

    case LOAD_COMMENTS_BY_ARTICLE_ID + FAIL:
        return state
            .setIn(['loadInfo', payload.articleId, 'error'], payload.error.statusText)
            .setIn(['loadInfo', payload.articleId, 'loading'], false)
            .setIn(['loadInfo', payload.articleId, 'loaded'], false);

    case LOAD_COMMENTS_BY_ARTICLE_ID + SUCCESS:
        return state
            .mergeIn(['entities'], arrToMap(payload.response, CommentModel))
            .setIn(['loadInfo', payload.articleId, 'loading'], false)
            .setIn(['loadInfo', payload.articleId, 'loaded'], true);
    }

    return state;
}
