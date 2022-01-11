import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { setupStore } from '../src/store/store';
const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
