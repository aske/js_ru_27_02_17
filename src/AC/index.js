import {INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION,
        ADD_COMMENT, ADD_COMMENT_TO_STORE, ADD_COMMENT_TO_ARTICLE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}


export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: { comment, articleId }
    }
}

export function addCommentToArticle(articleId, commentId) {
    return {
        type: ADD_COMMENT_TO_ARTICLE,
        payload: { commentId, articleId }
    }
}

export function addCommentToStore(comment, commentId) {
    const newComment = {...comment, id: commentId};
    return {
        type: ADD_COMMENT_TO_STORE,
        payload: { comment: newComment }
    }
}
