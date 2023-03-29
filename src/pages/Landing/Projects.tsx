import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Link,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';

export default function Projects() {
  const [liked, setLiked] = useState(false);

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={
              './imgs/1.png'
            }
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            Bellas Portugal
          </Heading>
          <Text color={'gray.500'} noOfLines={3}>
            Site de acompanhantes particular de portugal'EM PRODUÇÃO!', finalizando ajustes e db.
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Link
            href={'https://bellasproject.netlify.app/'}
            target={'_blank'}
            display={'flex'}
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              ACESSAR
            </Text>
            <BsArrowUpRight />
          </Link>
          <Flex
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor="pointer"
            >
          </Flex>
        </HStack>
      </Box>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={
              './imgs/2.png'
            }
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            Apollo Members
          </Heading>
          <Text color={'gray.500'} noOfLines={3}>
            Futura Nexly, plataforma de membros streamer on demand, grande projeto que está em produção!
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Link
            href={'https://apollomembers.netlify.app/'}
            target={'_blank'}
            display={'flex'}
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              ACESSAR
            </Text>
            <BsArrowUpRight />
          </Link>
          <Flex
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor="pointer"
            >
          </Flex>
        </HStack>
      </Box>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={
              './imgs/3.png'
            }
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            Auchan Portugal
          </Heading>
          <Text color={'gray.500'} noOfLines={3}>
            Grande mercado de portugal, fomos responsáveis por modificações
            no site e ajustes no db do site da empresa.
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Link
            href={'https://apollomembers.netlify.app/'}
            target={'_blank'}
            display={'flex'}
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              ACESSAR
            </Text>
            <BsArrowUpRight />
          </Link>
          <Flex
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor="pointer"
            >
          </Flex>
        </HStack>
      </Box>
      <Box
        w="xs"
        rounded={'sm'}
        my={5}
        mx={[0, 5]}
        overflow={'hidden'}
        bg="white"
        border={'1px'}
        borderColor="black"
        boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
        <Box h={'200px'} borderBottom={'1px'} borderColor="black">
          <Img
            src={
              './imgs/4.png'
            }
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
            Vendas Externas
          </Heading>
          <Text color={'gray.500'} noOfLines={3}>
            A CostaWeb junto a Alkord é responsável pela manutenção e edição do
            front-end e rotas.
          </Text>
        </Box>
        <HStack borderTop={'1px'} color="black">
          <Link
            href={'https://apollomembers.netlify.app/'}
            target={'_blank'}
            display={'flex'}
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Text fontSize={'md'} fontWeight={'semibold'}>
              ACESSAR
            </Text>
            <BsArrowUpRight />
          </Link>
          <Flex
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor="pointer"
            >
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
}