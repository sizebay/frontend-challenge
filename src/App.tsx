import { Provider } from 'react-redux';
import { Modal } from './components/Modal';
import { store } from './store/';

function App() {
  return (
    <Provider store={store}>
      <Modal />
    </Provider>
  );
}

export { App };
