import * as actionType from "./Main-types";
import { host } from "../utils";

const initialState = {
  host,
  paginationConfig: {
    totalPages: 1,
    totalElements: 4,
    numberOfElements: 4,
    size: 5,
    number: 0
  },
  author: "",
  items: [],
  blog: [],
  project: [],
  projectCategories: [],
  blogCategories: [],
  addEditModalShown: false,
  selectedItem: undefined,
  editMode: false,
  isLoading: false,
  successMessage: "",
  errorMessage: "",
  activeItems: "blog",
  filterDates: [],
  user: undefined
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
      if (action.errorCode && action.errorCode === 403) {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('rights');
        localStorage.removeItem('userId');
        return {
          ...state,
          user: undefined,
          errorMessage: 'error.no-session',
          isLoading: false
        };
      }
      return {
        ...state,
        errorMessage: action.errorMessage || 'error.common',
        isLoading: false
      };
    }
    case actionType.clearErrorsType: {
      return {
        ...state,
        errorMessage: ''
      };
    }
    case actionType.toggleAddEditModalType: {
      return {
        ...state,
        addEditModalShown: action.shown,
        editMode: !!action.selectedItem,
        selectedItem: !!action.selectedItem ? action.selectedItem : undefined
      };
    }
    case actionType.addEditItemPassedType: {
      return {
        ...state,
        isLoading: false
      };
    }
    case actionType.loginPassedType: {
      return {
        ...state,
        user: action.user,
        isLoading: false
      };
    }
    case actionType.logoutType: {
      return {
        ...state,
        user: undefined
      };
    }
    case actionType.requestPassedType: {
      return {
        ...state,
        successMessage: action.successMessage,
        isLoading: false
      };
    }
    case actionType.receivedProjectsType: {
      return {
        ...state,
        project: action.response.content.filter(project => project.active)
      };
    }
    case actionType.receivedCategoriesType: {
      return {
        ...state,
        [action.entityName + "Categories"]: action.response
      };
    }
    case actionType.receivedItemsType: {
      return {
        ...state,
        paginationConfig: {
          totalPages: action.response.totalPages,
          totalElements: action.response.totalElements,
          numberOfElements: action.response.numberOfElements,
          size: action.response.size,
          number: action.response.number
        },
        items: action.addResToList ? [...state.items, ...action.response.content] : action.response.content,
        isLoading: false
      };
    }
    case actionType.receivedArticlesType: {
      return {
        ...state,
        paginationConfig: {
          totalPages: action.response.totalPages,
          totalElements: action.response.totalElements,
          numberOfElements: action.response.numberOfElements,
          size: action.response.size,
          number: action.response.number
        },
        blog: state.blog.concat(action.response.content),
        isLoading: false
      };
    }
    case actionType.receivedFilterDates: {
      return {
        ...state,
        filterDates: action.response.reverse().map(date => {
          const tempDate = new Date(date);
          return {
            year: tempDate.getFullYear(),
            month: tempDate.toLocaleString('default', { month: 'long' }),
            monthVal: tempDate.getMonth() + 1
          }
        })
      };
    }
    case actionType.changeActiveItemsType: {
      let newState = {
        ...state,
        activeItems: action.activeItems,
      };
      newState.paginationConfig.number = 0;
      return newState
    }
    case actionType.receivedAuthor: {
      return{
        ...state,
        author: action.author ? action.author.firstName + ' ' + action.author.lastName : '',
      };
    }
    default: {
      return state;
    }
  }
};
