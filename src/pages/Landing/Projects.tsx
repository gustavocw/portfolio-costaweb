import React from 'react';
import "../../styles/globals.css"
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Projects() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '30%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Thiago Finch',
      text:
        "DESCRIÇÃO SOBRE O PRODUTOR.....",
      image:
        'https://thiagofinch.digital/img/hero.png',
    },
    {
      title: '',
      text:
        "",
      image:
        'https://g3value.com.br/wordpress/wp-content/files/g3value.com.br/2020/02/nigro2-2-1024x972.png',
    },
    {
      title: 'Rick Chester',
      text:
        "DESCRIÇÃO SOBRE O PRODUTOR.....",
      image:
        'https://rickchesther.com.br/wp-content/uploads/2023/02/rick-chesther.png-1-800x1024.webp',
    },
  ];

  return (
    <div className="container-slide">
      <Heading className="titulo-slider" mx={5}>
        Confira alguns projetos feito por nossa equipe
      </Heading>
      <div className="content-slider">
        <Box
          position={'relative'}
          height={'650px'}
          width={'full'}
          overflow={'hidden'}>
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* Left Icon */}
          <IconButton
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickPrev()}>
            <BiLeftArrowAlt size="40px" />
          </IconButton>
          {/* Right Icon */}
          <IconButton
            aria-label="right-arrow"
            variant="ghost"
            position="absolute"
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickNext()}>
            <BiRightArrowAlt size="40px" />
          </IconButton>
          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map((card, index) => (
              <Box
                key={index}
                height={'1xl'}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${card.image})`}>
                {/* This is the block you need to change, to customize the caption */}
                <Container size="container.lg" height="500px" position="relative">
                  <Stack
                    spacing={6}
                    w={'full'}
                    maxW={'lg'}
                    position="absolute"
                    top="70%"
                    transform="translate(0, -50%)">
                    <Heading  color={"black"} textShadow={"1px 1px 10px #fff"} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                      {card.title}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color="Black">
                      {card.text}
                    </Text>
                  </Stack>
                </Container>
              </Box>
            ))}
          </Slider>
        </Box>
      </div>
    </div>
  );
}