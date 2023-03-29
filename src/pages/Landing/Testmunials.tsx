import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box my={20}  bg={'blackAlpha.800'} color={'#fff'}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Ouça o que nossos clientes têm a dizer sobre nós</Heading>
          <Text>Comentários reais de pessoas reais, comprovando nossa excelência em atendimento e qualidade.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Alkord Sistemas</TestimonialHeading>
              <TestimonialText>
              Nossa parceria com eles para manutenção de 
              nossos sistemas tem sido excelente. O suporte é sempre rápido e eficiente, e a qualidade do trabalho é impecável
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://www.vendasexternas.com.br/wp-content/uploads/2016/09/cropped-favicon-vendasexternas.png'
              }
              name={'Vinícios'}
              title={'CTO Alkord Sistemas Ltda'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Auchan</TestimonialHeading>
              <TestimonialText>
              "Estamos extremamente satisfeitos com o serviço de manutenção de site prestado pela equipe. Eles são altamente responsivos e eficientes em 
              resolver qualquer problema que possa surgir. Sem dúvida, recomendamos seus serviços a qualquer empresa que precise de suporte técnico confiável
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://assets.stickpng.com/images/5a1c2db4f65d84088faf13ce.png'
              }
              name={'Hichame Rahoui'}
              title={'CTO at Auchan Portugal'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Nexly Members</TestimonialHeading>
              <TestimonialText>
              A plataforma web que eles estão criando para nós superou todas as nossas 
              expectativas. O design é moderno e funcional, e a equipe é muito profissional durante todo o processo de desenvolvimento.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png'
              }
              name={'Lucas'}
              title={'CEO at Nexly Members'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}