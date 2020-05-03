import * as actionType from './posts-types';
import { host, getParams } from "../utils";


export const actionCreators = {
  getItem: (postType, postId) => async (dispatch) => {
    dispatch({ type: actionType.requestType });
    let url = `${host}/v2/api/${postType}/${postId}`;
    let response = await fetch(url, getParams('GET', true));
    if (!response.ok) {
      dispatch({ type: actionType.requestFailedType, error: response.status });
    } else {
      response = await response.json();
      dispatch({ type: actionType.receivedItemType, response });
    }
  },
  getLikes: (postType, postId) => async (dispatch) => {
    dispatch({ type: actionType.requestType });
    let url = `${host}/v2/api/${postType}/posts/${postId}/likes`;
    let response = await fetch(url, getParams('GET', true));
    if (!response.ok) {
      dispatch({ type: actionType.requestFailedType, error: response.status });
    } else {
      response = await response.json();
      dispatch({ type: actionType.receivedLikesType, response });
    }
  },
  toggleLike: (postType, postId) => async (dispatch) => {
    /*dispatch({ type: actionType.requestType });
    let url = `${host}/v2/api/${type}/${id}`;
    let response = await fetch(url, getParams('GET', true));
    if (!response.ok) {
      dispatch({ type: actionType.requestFailedType, error: response.status });
    } else {
      response = await response.json();
      dispatch({ type: actionType.receivedItemType, response });
    }*/
  },
  getComments: (postType, postId) => async (dispatch) => {
    dispatch({ type: actionType.requestType });
    let url = `${host}/v2/api/${postType}/posts/${postId}/comments`;
    let response = await fetch(url, getParams('GET', true));
    if (!response.ok) {
      dispatch({ type: actionType.requestFailedType, error: response.status });
    } else {
      response = await response.json();
      dispatch({ type: actionType.receivedCommentsType, response });
    }
  },
  addComment: (postType, postId, userId, content) => async (dispatch) => {
    let url = `${host}/v1/api/${postType}/posts/${postId}/comments/${userId}`;
    const params = getParams('POST', true);
    params.body = JSON.stringify({ content });

    dispatch({ type: actionType.requestType });
    let response = await fetch(url, params);
    if (!response.ok) {
      dispatch({ type: actionType.requestFailedType, error: response.status });
    }
  },
  deleteComments: (postType, postId, commentId) => async (dispatch) => {
    /*dispatch({ type: actionType.requestType });
    let url = `${host}/v2/api/${type}/${id}`;
    let response = await fetch(url, getParams('GET', true));
    if (!response.ok) {
      dispatch({ type: actionType.requestFailedType, error: response.status });
    } else {
      response = await response.json();
      dispatch({ type: actionType.receivedItemType, response });
    }*/
  },
};
