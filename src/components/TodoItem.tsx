import React from 'react';
import { Checkbox } from '@chakra-ui/react';
import { useTodos } from '../store/todosStore';

interface TodoItemProps {
  todo: {
    title: string;
    completed: boolean;
    id: number;
  };
};

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const toggleTodo = useTodos(state => state.toggleTodo);

  return (
    <div>
      <Checkbox size={'lg'} isChecked={todo.completed} onChange={() => toggleTodo(todo.id)}>{todo.title}</Checkbox>
    </div>
  )
}

export default TodoItem