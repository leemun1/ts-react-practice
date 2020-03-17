import React from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

function App() {
  const todos = [{ id: 't1', text: 'finish this course' }];

  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  );
}

export default App;
