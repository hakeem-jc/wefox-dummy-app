import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '../common/store';

const providerWrapper = (
  <Provider store={store}>
     <App />
  </Provider>
);


test('renders app title', () => {
  render(providerWrapper);
  const title = screen.getByText(/Posts/i);
  expect(title).toBeInTheDocument();
});
