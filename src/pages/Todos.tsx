import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';
import TodoList from '../components/TodoList';

const Todos = () => {
  return (
    <>
      <Link href='/characters' color='teal.500' fontSize={15}>Go to Characters list</Link>
      <Text color='teal.500' fontSize={15}>*This page shows you base of work with Zustand</Text>
      <Flex justifyContent='center' alignItems='center' direction='column' height='95vh'>
        <Text pb={15} fontSize={32} fontWeight={700}>ToDo with Chakra UI and Zustand</Text>
        <TodoList />
      </Flex>
    </>
  );
};

export default Todos;