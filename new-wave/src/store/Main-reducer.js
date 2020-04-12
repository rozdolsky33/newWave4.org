import * as actionType from "./Main-types";

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
  articles: [],
  projects: [],
  addEditModalShown: false,
  selectedItem: undefined,
  editMode: false,
  isLoading: false,
  successMessage: "",
  errorMessage: "",
  activeItems: "blog",
  menuItems: []
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
        errorMessage: action.errorMessage || `Something went wrong, error code - ${action.error}`,
        isLoading: false
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
        token: action.token,
        isLoading: false
      };
    }
    case actionType.requestPassedType: {
      return {
        ...state,
        successMessage: action.successMessage,
        isLoading: false
      };
    }
    case actionType.receiveMenuItemsType: {
      let menuItems = [{
        description: "Про нас",
        subItems: [
          {
            description: "Рада",
            link: "/our-team"
          },
          {
            description: "Історія створення",
            link: "/history"
          },
          {
            description: "Звіти",
            link: "/reports"
          },
          {
            description: "Контакти",
            link: "/contact-us"
          }
        ]
      },
        {
          description: "Блоги",
          link: "/blog"
        }];
      const activeProjects = action.response.content.filter(project => project.active);
      if (activeProjects.length > 0) {
        menuItems = [
          {
            description: "Проекти",
            subItems: activeProjects.map(project => {
              return {
                description: project.title,
                link: `/item/project/${project.id}`
              }
            })
          },
          ...menuItems
        ];
      }
      menuItems = [{
        description: "Головна",
        link: "/"
      }, ...menuItems];
      return {
        ...state,
        projects: activeProjects,
        menuItems
      };
    }
    case actionType.receiveItemsType: {
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
    case actionType.receiveArticlesType: {
      return {
        ...state,
        paginationConfig: {
          totalPages: action.response.totalPages,
          totalElements: action.response.totalElements,
          numberOfElements: action.response.numberOfElements,
          size: action.response.size,
          number: action.response.number
        },
        articles: action.response.content,
        isLoading: false
      };
    }
    case actionType.receiveItemType: {
      return {
        ...state,
        selectedItem: action.response,
        isLoading: false
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
    default: {
      return state;
    }
  }
};
