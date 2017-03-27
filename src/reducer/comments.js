import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_PAGE_COMMENTS, FAIL, SUCCESS, START } from '../constants'
import {arrToMap} from './utils'
import {Record, Map} from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

const DefaultReducerState = Record({
    entities: new Map({}),
    paginated: new Map({}),
    paginationLoad: new Map({})
})


export default (comments = new DefaultReducerState(), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, new CommentModel({
                id: randomId,
                ...payload.comment
            }))

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
        return comments.mergeIn(['entities'], arrToMap(payload.response, CommentModel))

    case LOAD_PAGE_COMMENTS + START:
        return comments.setIn(['paginationLoad', payload.id, 'loading'], true)
                       .setIn(['paginationLoad', payload.id, 'loaded'], false);

    case LOAD_PAGE_COMMENTS + SUCCESS:
        const ids = payload.response.records.map (r => r.id);
        return comments.mergeIn(['entities'], arrToMap(payload.response.records, CommentModel))
            .setIn(['paginationLoad', payload.id, 'loading'], false)
            .setIn(['paginationLoad', payload.id, 'loaded'], true)
            .setIn(['paginated', payload.id], ids);

    case LOAD_PAGE_COMMENTS + FAIL:
        return comments;
    }

    return comments
}
