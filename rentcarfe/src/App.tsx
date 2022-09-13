import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./Redux/store";
import {Register} from "./Containers/Auth";

function App() {
  return (
      <Provider store={store}>
         <Register/>
      </Provider>
  );
}

export default App;
