import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { Input, Button, Flex, Stack } from '@chakra-ui/react'
import { useTodos } from '../store/todosStore';

const TodoList = () => {
  const filter = useTodos(state => state.todosFilter);
  const changeFilter = useTodos(state => state.changeTodosFilter);
  const addTodo = useTodos(state => state.addTodo);
  const todos = useTodos(state => state.todos.filter(todo => {
    switch (filter) {
      case 'completed':
        return todo.completed;
      case 'uncompleted':
        return !todo.completed;
      default:
        return todo;
    }
  }))
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <Stack direction='row' mb={10} spacing='4'>
        <Button onClick={() => changeFilter('all')} disabled={ filter === 'all' }>All</Button>
        <Button onClick={() => changeFilter('completed')} disabled={ filter === 'completed' }>Completed</Button>
        <Button onClick={() => changeFilter('uncompleted')} disabled={ filter === 'uncompleted' }>Uncompleted</Button>
      </Stack>
      { todos.map(todo => <TodoItem todo={todo} key={todo.id} />) }
      <Flex alignItems={'center'} mt={'20px'}>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Button color={'blue.400'} p={'20px'} ml={'10px'} onClick={() => inputValue.length >= 3 ? addTodo(inputValue) : alert('Write more about your task')}>Add todo</Button>
      </Flex>
    </div>
  );
};

export default TodoList;