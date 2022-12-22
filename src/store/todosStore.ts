import create from 'zustand';
import { persist } from 'zustand/middleware'

interface ITodo {
  title: string;
  completed: boolean;
  id: number;
}
interface TodosStore {
  todos: ITodo[];
  todosFilter: 'all' | 'completed' | 'uncompleted';
  addTodo: (todo: string) => void;
  toggleTodo: (id: number) => void;
  changeTodosFilter: (filter: 'all' | 'completed' | 'uncompleted') => void;
}

export const useTodos = create<TodosStore>()(persist(set => ({
  todos: [],
  todosFilter: 'all',
  changeTodosFilter: (filter: 'all' | 'completed' | 'uncompleted') => set(state => ({todosFilter: filter})),
  addTodo: (title: string) => {
    const newTodo = { title, completed: false, id: Math.floor(Math.random()*new Date().getUTCMilliseconds()) } as ITodo;
    set(state => ({
      todos: [newTodo, ...state.todos]
    }));
  },
  toggleTodo: (id: number) => {
    set(state => ({
      todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    }))
  }
})));