import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { default as mainReducer } from './main/Main-reducer';
import { default as postsReducer } from './posts/posts-reducer';

export default function configureStore(history, initialState) {
  const reducers = {
    mainReducer,
    postsReducer
  };

  const middleware = [
    thunk,
    routerMiddleware(history)
  ];

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}
