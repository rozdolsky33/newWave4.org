const requestType = "REQUEST_STARTED";
const requestFailedType = "REQUEST_FAILED";
const loginPassedType = "LOGIN_SUCCESSFUL";
const registrationPassedType = "REGISTRATION_SUCCESSFUL";
const addArticlePassedType = "ADD_ARTICLE_SUCCESSFUL";
const toggleAddEditArticleModalType = "TOGGLE_ADD_EDIT_ARTICLE_MODAL";
const receiveArticlesType = "RECEIVE_ARTICLES";
const articleDeletedType = "ARTICLE_DELETED";
const initialState = {
  host: "http://162.212.158.14:8080",
  paginationConfig: {
    totalPages: 1,
    totalElements: 4,
    numberOfElements: 4,
    size: 5,
    number: 0
  },
  articles: [],
  events: [],
  addEditModalShown: false,
  editArticleMode: false,
  isLoading: false,
  errorMessage: ""
};

const getParams = (methodType) => {
  const params = {
    method: methodType,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Request-Method": methodType,
      "Access-Control-Request-Headers": "Content-Type",
      "Content-Type": "application/json"
    }
  };
  const token = localStorage.getItem("token");
  if (!!token) {
    params.headers.Authorization = token;
  }
  return params;
};

export const actionCreators = {
  login: (email, password) => async (dispatch) => {
    const url = `${initialState.host}/v1/api/users/login`;
    const params = getParams("POST");
    params.body = JSON.stringify({email, password});

    dispatch({ type: requestType });
    let response = await fetch(url, params);
    if (response.ok) {
      const token = response.headers.get("Authorization");
      dispatch({ type: loginPassedType, token});
      localStorage.setItem("token", token);
      window.location.href = "/admin";
    } else {
      dispatch({ type: requestFailedType, error: response.status});
    }
  },
  register: (email, firstName, lastName, password) => async (dispatch) => {
    const url = `${initialState.host}/v1/api/users`;
    const params = getParams("POST");
    params.body = JSON.stringify({email, firstName, lastName, password});

    dispatch({ type: requestType });
    let response = await fetch(url, params);
    if (response.ok) {
      dispatch({ type: registrationPassedType});
      window.location.href = "/login";
    } else {
      dispatch({ type: requestFailedType, error: response.status});
    }
  },
  getArticles: (pageNumber, pageSize) => async (dispatch) => {
    dispatch({ type: requestType });
    let url = `${initialState.host}/v2/api/blog/${pageNumber}/${pageSize}`;
    let response = await fetch(url, getParams("GET"));
    response = await response.json();

    dispatch({ type: receiveArticlesType, response });
    if (!response.ok) {
      dispatch({ type: requestFailedType, error: response.status});
    }
  },
  deleteArticle: (id) => async (dispatch) => {
    dispatch({ type: requestType });
    let url = `${initialState.host}/v1/api/blog/${id}`;
    const response = await fetch(url, getParams("DELETE"));

    if (response.ok) {
      dispatch({ type: articleDeletedType });
    } else {
      dispatch({ type: requestFailedType, error: response.status});
    }
  },
  addArticle: (articleParams) => async (dispatch) => {
    dispatch({ type: requestType });
    const url = `${initialState.host}/v2/api/blog`;
    const params = getParams("POST");
    params.body = JSON.stringify({
      ...articleParams,
      date: new Date(),
    });
    let response = await fetch(url, params);

    if (response.ok) {
      dispatch({ type: addArticlePassedType });
      dispatch({ type: toggleAddEditArticleModalType, shown: false });
    } else {
      dispatch({ type: requestFailedType, error: response.status});
    }
  },
  toggleAddEditArticleModal: (shown, editMode) => async (dispatch) => {
    dispatch({ type: toggleAddEditArticleModalType, shown, editMode });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case requestType: {
      return {
        ...state,
        errorMessage: "",
        isLoading: true
      };
    }
    case requestFailedType: {
      return {
        ...state,
        errorMessage: `Something went wrong, error code - ${action.error}`
      };
    }
    case toggleAddEditArticleModalType: {
      return {
        ...state,
        addEditModalShown: action.shown,
        editArticleMode: !!action.editMode
      };
    }
    case addArticlePassedType: {
      return {
        ...state,
        articles: state.articles
      };
    }
    case loginPassedType: {
      return {
        ...state,
        token: action.token
      };
    }
    case receiveArticlesType: {
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
    default: {
      return state;
    }
  }
};
