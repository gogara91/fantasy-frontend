import React from 'react';
import './css/App.css';
import Router from './Router';
import { Provider } from 'react-redux';
import ErrorWindow  from './components/partials/ErrorModal'
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Router>
          </Router>
          <ErrorWindow/>
      </div>
    </Provider>

  );
}

export default App;
