import store from '@redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '@static/styles/global';

export const decorators = [
  (Story) => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <Story />
        </BrowserRouter>
      </Provider>
    );
  },
];
