import React, { useEffect } from 'react';
import { useCharacters } from '../store/charactersStore';
import { Flex, Link, Text, Skeleton, Box } from '@chakra-ui/react';
import CharacterCard from '../components/CharacterCard';

const Characters= () => {
  const { characters, fetchCharacters, isLoading } = useCharacters(state => state);

  useEffect(() => {
    fetchCharacters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Link href='/' color='teal.500' fontSize={15}>Go to ToDo list</Link>
      <Text color='teal.500' fontSize={15}>*This page shows you work with async requests in Zustand</Text>
      <Flex wrap='wrap' justifyContent='center'>
        {
          isLoading
          ? <Box>
              <Skeleton borderRadius='lg' width='300px' height='300px' />
              <Skeleton mt='15px' borderRadius='10px' width='250px' height='25px' />
            </Box>
          : characters.map(character => {
            return <CharacterCard key={character.id} character={character} />;
          })
        }
      </Flex>
    </>
  );
};

export default Characters;