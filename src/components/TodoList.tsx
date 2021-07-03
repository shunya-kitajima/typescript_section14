import React from 'react';

const TodoList: React.FC = () => {
  const todos = [{id: 't1', text: 'TypeScriptコースの完了'}];
  return <ul>
    {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
  </ul>
};

export default TodoList;