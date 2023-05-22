import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsPerson, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';

export default function Contact() {
  const { hasCopied, onCopy } = useClipboard('Optimum@gmail.com');

  return (
    <>    
    <Flex
      bg={'blackAlpha.800'}
      color={'#fff'}
      align="center"
      justify="center"
      id="contact">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}>
              Entre em contato conosco por email
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}>
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}>
                <Tooltip
                  label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                  closeOnClick={false}
                  hasArrow>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="https://github.com/gustavocw">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
                <Link href="https://wa.link/s8my4v">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    icon={<BsWhatsapp size="28px" />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/90226202/admin/;">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bg={'blackAlpha.800'}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.200', 'whiteAlpha.900')}
                shadow="base">
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Nome</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<BsPerson />} />
                      <Input type="text" name="name" placeholder="Nome" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<MdOutlineEmail />} />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Seu email"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Mensagem</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>

                  <Button
                    colorScheme="blue"
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    Enviar mensagem
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
    </>
  );
}