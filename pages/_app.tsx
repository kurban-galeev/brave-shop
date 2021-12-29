import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { getAllItemsAPI } from '../src/main';

const defaultStateTitle = {
  title: 'All items',
};

export interface massive {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface IDef {
  items: massive[];
}
// : IDef
const defaultStateItems: IDef = {
  items: [],
};
export interface IActionTitle {
  type: string;
  title: string;
}
export interface IActionItems {
  type: string;
  items: massive;
  category: string;
}

const titleReducer = (state = defaultStateTitle, action: IActionTitle) => {
  switch (action.type) {
    case 'SET_CATEGORIE':
      return { ...state, title: action.title };
    default:
      return state;
  }
};
const allItemsReducer = (state = defaultStateItems, action: IActionItems) => {
  switch (action.type) {
    case 'SET_ALLITEMS':
      return { ...state, items: action.items };
    case 'SET_ITEMS_FOR_CATEGORIE':
      // getAllItemsAPI().then()
      return {
        ...state,
        items: state.items.filter((element) => {
          if (element.category === String(action.items)) return element;
        }),

        // getAllItemsAPI().then((elem) => {
        //   elem.items.filter((element) => {
        //     element.category === String(action.items);
        //   });
        // }),
        // if (elem.items.category === String(action.items)) return elem;
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  title: titleReducer,
  items: allItemsReducer,
});
const store = createStore(rootReducer);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
