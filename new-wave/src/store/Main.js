const requestType = 'REQUEST_STARTED';
const receiveArticlesType = 'RECEIVE_ARTICLES';
const articleDeletedType = 'RECEIVE_ARTICLES';
const initialState = {
  host: 'http://162.212.158.14:8080',
  paginationConfig: {
    totalPages: 1,
    totalElements: 4,
    numberOfElements: 4,
    size: 5,
    number: 0
  },
  articles: [],
  events: [],
  isLoading: false
};

const getParams = (methodType) => {
  return {
    method: methodType,
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Request-Method': methodType,
      'Access-Control-Request-Headers': 'Content-Type',
      'Content-Type': 'application/json'
    }
  };
};

export const actionCreators = {
  getArticles: (pageNumber, pageSize) => async (dispatch) => {
    dispatch({ type: requestType });
    let url = `${initialState.host}/v2/api/blog/${pageNumber}/${pageSize}`;
    let response = await fetch(url, getParams('GET'));
    response = await response.json();

    dispatch({ type: receiveArticlesType, response });
  },
  deleteArticle: (id) => async (dispatch) => {
    dispatch({ type: requestType });
    let url = `${initialState.host}/v2/api/blog/${id}`;
    const response = await fetch(url, getParams('DELETE'));
    const resp = await response.json();
    const articles = resp.content;

    dispatch({ type: articleDeletedType });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestType) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveArticlesType) {
    return {
      ...state,
      paginationConfig: {
        totalPages: action.response.totalPages,
        totalElements: action.response.totalElements,
        numberOfElements: action.response.numberOfElements
      },
      articles: action.response.content,
      isLoading: false
    };
  }

  return state;
};
