import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import TodoList from './components/TodoList';

function App() {
  return (
    <Flex justify={'center'} align={'center'} height={'100vh'} width={'100vw'} direction={'column'}>
      <Text pb={15} fontSize={32} fontWeight={700}>ToDo with Chakra UI and Zustand</Text>
      <TodoList />
    </Flex>
  );
}

export default App;
