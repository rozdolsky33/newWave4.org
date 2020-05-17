import * as actionType from "./posts-types";
import {host} from "../utils";

const initialState = {
  host,
  selectedItem: undefined,
  errorMessage: "",
  isLoading: false,
  likes: [],
  comments: []
};

export default function reducer (state, action) {
  state = state || initialState;
  switch (action.type) {
    case actionType.requestType: {
      return {
        ...state,
        errorMessage: "",
        isLoading: true
      };
    }
    case actionType.requestFailedType: {
      return {
        ...state,
        errorMessage: action.errorMessage || 'error.common',
        isLoading: false
      };
    }
    case actionType.receivedItemType: {
      return {
        ...state,
        selectedItem: action.response,
        isLoading: false
      };
    }
    case actionType.receivedCommentsType: {
      return {
        ...state,
        comments: action.response.content,
        isLoading: false
      };
    }
    case actionType.receivedLikesType: {
      return {
        ...state,
        likes: action.response.content,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
};
