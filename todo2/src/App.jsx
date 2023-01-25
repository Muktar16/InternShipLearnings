import React from 'react';
import TodoState from './context/todo/TodoState';
import Topbar from './components/Topbar/Topbar';

const App = () => {

  return (
    <TodoState>
      <Topbar></Topbar>
    </TodoState>
  )  
};

export default App;
