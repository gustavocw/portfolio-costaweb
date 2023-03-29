import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAcceptDatabase, FcAlarmClock, FcEditImage, FcFlashAuto, FcSmartphoneTablet, FcGlobe } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function About() {
  return (
    <Box p={4}>
      <SimpleGrid my={20} columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAcceptDatabase} w={10} h={10} />}
          title={'Banco de dados seguro'}
          text={
            'Nossos bancos de dados são seguros e confiáveis, protegidos' +
            ' por criptografia de última geração. Tenha a tranquilidade de saber que seus dados estão protegidos conosco.'
          }
        />
        <Feature
          icon={<Icon as={FcAlarmClock} w={10} h={10} />}
          title={'Entregamos seu projeto no melhor prazo'}
          text={
            'Entrega rápida e eficiente. Nosso compromisso é entregar seus projetos de programação com agilidade e qualidade, superando suas expectativas.'
          }
        />
        <Feature
          icon={<Icon as={FcEditImage} w={10} h={10} />}
          title={'Design moderno e atrativo'}
          text={
            'Design moderno com Material UI. Criamos interfaces intuitivas e atraentes para seus usuários, com a qualidade e a usabilidade que sua empresa merece.'
          }
        />
        <Feature
          icon={<Icon as={FcFlashAuto} w={10} h={10} />}
          title={'Qualificação A+'}
          text={
            'Sites Rápidos. Utilizamos tecnologias avançadas para garantir a velocidade e o desempenho de seus sites, proporcionando a melhor experiência para seus clientes.'
          }
        />
        <Feature
          icon={<Icon as={FcSmartphoneTablet} w={10} h={10} />}
          title={'Modelos responsivos'}
          text={
            'Responsividade em todos os dispositivos. Seus clientes acessam seu site de diferentes dispositivos e nós garantimos a responsividade e a adaptabilidade em todos eles, para que sua empresa esteja presente onde seus clientes estiverem.'
          }
        />
        <Feature
          icon={<Icon as={FcGlobe} w={10} h={10} />}
          title={'Domínios grátis e personalizados'}
          text={
            'Domínios grátis e personalizados para sua empresa decolar na web. Tenha um endereço exclusivo e profissional na internet e fortaleça a presença digital da sua marca.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}