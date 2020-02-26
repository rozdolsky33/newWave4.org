const requestArticlesType = 'REQUEST_ARTICLES';
const receiveArticlesType = 'RECEIVE_ARTICLES';
const initialState = {
  articles: [],
  events: [],
  isLoading: false
};

export const actionCreators = {
  getArticles: () => async (dispatch) => {

    dispatch({ type: requestArticlesType});


    let url = "http://162.212.158.14:8080/v2/api/blog?limit=2&page=0";
    let params = {
      method: "GET",
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "GET",
        "Access-Control-Request-Headers": "Content-Type",
        "Content-Type": "application/json"
      }
    };
    const response = await fetch(url, params);
    const articles = await response.json();

    dispatch({ type: receiveArticlesType, articles });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestArticlesType) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveArticlesType) {
    return {
      ...state,
      articles: action.articles,
      isLoading: false
    };
  }

  return state;
};
