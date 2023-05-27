import "../../styles/responsive.css"
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function LandingPage() {
    
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://i0.wp.com/www.lessonsindesign.com/wp-content/uploads/2020/09/Best-Agency-Websites.png?fit=1600%2C749&ssl=1)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Transformamos ideias em soluções digitais. Desenvolvimento web sob medida para sua empresa decolar!
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}
                onClick={() => window.open('wa.link/dg9tlc', '_blank')}>
                FAZER ORÇAMENTO!
              </Button>
              {/* <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}
                onClick={() => window.open('#about')}>
                SOBRE NÓS
              </Button> */}
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }