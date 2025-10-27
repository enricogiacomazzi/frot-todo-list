import style from './App.module.css';
import { useState } from 'react';
import {produce} from 'immer';
import clsx from 'clsx';
import { MyButton } from './components/MyButton';


const initialState = [
  {id: 1, text: 'fare la spesa', done: false},
  {id: 2, text: 'guardare batman', done: false},
  {id: 3, text: 'imparare a usare i colori', done: false},
  {id: 4, text: 'banana', done: false},
]

function App() {
  const [todos, setTodos] = useState(initialState);

  function deleteTodo(td) {
    setTodos(todos.filter(t => t.id !== td.id));
  }

  function toggleTodo(td) {
    const index = todos.findIndex(t => t.id === td.id);

    setTodos(produce(todos, draft => {
      draft[index].done = !draft[index].done;
    }));
  }

  return (
    <>
      <ul>
        {todos.map(t => <li key={t.id}>
            <span className={clsx('todo', {'done': t.done})}>{t.text}</span>
            <MyButton 
              level={4} 
              icon="fa-trash" 
              clickHandler={() => deleteTodo(t)} 
            />
            <MyButton 
              icon={ t.done ? 'fa-times' : 'fa-check'} 
              clickHandler={() => toggleTodo(t)} 
            />
          </li>)}
      </ul>
    </>
  )
}

export default App
