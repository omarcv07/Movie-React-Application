import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/header/index'
import Router from '../src/Router'
import MainWrapper from './layouts/MainLayout'

import { ConfigureStore } from './store/reducers/configStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <MainWrapper>
          <Router />
        </MainWrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
