import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { BsPerson } from 'react-icons/bs';
  import { FiServer } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';

  
  
  interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
  }


  function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
      <Stat
      bg={'blackAlpha.800'}
      color={'#fff'}
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex
        justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.400', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function Clients() {
    return (
      <Box
      bg={'blackAlpha.800'}
      color={'#fff'}
       maxW="10xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Torne-se um de clientes satisfeitos que confiam em nosso serviço. Experimente agora e faça parte da nossa comunidade de sucesso.
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Clientes'}
            stat={'18'}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Sites Online'}
            stat={'15'}
            icon={<FiServer size={'3em'} />}
          />
          <StatsCard
            title={'Loc. em que atuamos'}
            stat={'8'}
            icon={<GoLocation size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    );
  }