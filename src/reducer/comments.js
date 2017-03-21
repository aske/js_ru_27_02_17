import {normalizedComments} from '../fixtures'
import { ADD_COMMENT_TO_STORE } from '../constants'

export default (comments = normalizedComments, action) => {
    const { type, payload } = action

    switch (type) {
    case ADD_COMMENT_TO_STORE:
        return comments.concat([payload.comment]);
    }

    return comments
}
