const requestType = "REQUEST_STARTED";
const requestFailedType = "REQUEST_FAILED";
const loginPassedType = "LOGIN_SUCCESSFUL";
const registrationPassedType = "REGISTRATION_SUCCESSFUL";
const addEditItemPassedType = "ADD_EDIT_ITEM_SUCCESSFUL";
const toggleAddEditModalType = "TOGGLE_ADD_EDIT_MODAL";
const receiveItemsType = "RECEIVE_ITEMS";
const receiveItemType = "RECEIVE_ITEM";
const itemDeletedType = "ITEM_DELETED";
const changeActiveItemsType = "CHANGE_ACTIVE_ITEMS";

const initialState = {
  host: "http://162.212.158.14:8080",
  paginationConfig: {
    totalPages: 1,
    totalElements: 4,
    numberOfElements: 4,
    size: 5,
    number: 0
  },
  items: [],
  addEditModalShown: false,
  selectedItem: undefined,
  editMode: false,
  isLoading: false,
  errorMessage: "",
  activeItems: "blog"
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
  getItemsList: (activeItems, pageNumber, pageSize) => async (dispatch) => {
    dispatch({ type: requestType });
    let url = `${initialState.host}/v2/api/${activeItems}/${pageNumber}/${pageSize}`;
    let response = await fetch(url, getParams("GET"));
    if (response.ok) {
      response = await response.json();
      dispatch({ type: receiveItemsType, response });
    } else if (response.status === 403) {
      window.location.href = "/login";
    } else {
      dispatch({ type: requestFailedType, error: response.status});
    }
  },
  getItem: (id) => async (dispatch) => {
    dispatch({ type: requestType });
    let url = `${initialState.host}/v1/api/blog/${id}`;
    let response = await fetch(url, getParams("GET"));
    response = await response.json();

    dispatch({ type: receiveItemType, response });
    if (!response.ok) {
      dispatch({ type: requestFailedType, error: response.status});
    }
  },
  deleteItem: (activeItems, id) => async (dispatch) => {
    dispatch({ type: requestType });
    let url = `${initialState.host}/v1/api/${activeItems}/${id}`;
    const response = await fetch(url, getParams("DELETE"));

    if (response.ok) {
      dispatch({ type: itemDeletedType });
    } else {
      dispatch({ type: requestFailedType, error: response.status});
    }
  },
  addEditItem: (activeItems, itemParams) => async (dispatch) => {
    dispatch({ type: requestType });
    const url = `${initialState.host}/v1/api/${activeItems}`;
    const params = getParams("POST");
    params.body = JSON.stringify({
      ...itemParams,
      active: true,
      imageUri: "",
    });
    let response = await fetch(url, params);

    if (response.ok) {
      dispatch({ type: addEditItemPassedType });
      dispatch({ type: toggleAddEditModalType, shown: false });
    } else {
      dispatch({ type: requestFailedType, error: response.status});
    }
  },
  changeActiveItems: (activeItems) => async (dispatch) => {
    dispatch({ type: changeActiveItemsType, activeItems });
  },
  toggleAddEditModal: (shown, selectedItem) => async (dispatch) => {
    dispatch({ type: toggleAddEditModalType, shown, selectedItem });
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
        errorMessage: `Something went wrong, error code - ${action.error}`,
        isLoading: false
      };
    }
    case toggleAddEditModalType: {
      return {
        ...state,
        addEditModalShown: action.shown,
        editMode: !!action.selectedItem,
        selectedItem: !!action.selectedItem ? action.selectedItem : undefined
      };
    }
    case addEditItemPassedType: {
      return {
        ...state,
        isLoading: false
      };
    }
    case loginPassedType: {
      return {
        ...state,
        token: action.token,
        isLoading: false
      };
    }
    case receiveItemsType: {
      return {
        ...state,
        paginationConfig: {
          totalPages: action.response.totalPages,
          totalElements: action.response.totalElements,
          numberOfElements: action.response.numberOfElements,
          size: action.response.size,
          number: action.response.number
        },
        items: action.response.content,
        isLoading: false
      };
    }
    case receiveItemType: {
      return {
        ...state,
        selectedItem: action.response,
        isLoading: false
      };
    }
    case changeActiveItemsType: {
      return {
        ...state,
        activeItems: action.activeItems
      };
    }
    default: {
      return state;
    }
  }
};
