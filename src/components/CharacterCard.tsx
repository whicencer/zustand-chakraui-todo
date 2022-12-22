import React from 'react';
import { Card, Image, CardBody, Text } from '@chakra-ui/react'

interface CharacterCardProps {
  character: {
    image: string,
    name: string
  }
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Card m={10}>
      <CardBody>
        <Image
          src={ character.image }
          alt={ character.name }
          borderRadius='lg'
        />
        <Text fontSize='20px' fontWeight={600}>{ character.name }</Text>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;