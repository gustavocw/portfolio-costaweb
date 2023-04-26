import "../../styles/responsive.css";
import { useEffect, useRef, useState } from "react";
import Tilt from "vanilla-tilt";
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
} from "@chakra-ui/react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";

export default function Projects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  let mouseX = 0;
  let mouseY = 0;

  let cursorX = 0;
  let cursorY = 0;

  let speed = 0.01;

  const animate = () => {
    let distX = mouseX - cursorX;
    let distY = mouseY - cursorY;

    cursorX = cursorX + distX * speed;
    cursorY = cursorY + distY * speed;

    if (cursorRef.current) {
      cursorRef.current.style.left = cursorX + "px";
      cursorRef.current.style.top = cursorY + "px";
    }

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDocument>) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
  };

  useEffect(() => {
    const tiltElements = document.querySelectorAll(".card");
    tiltElements.forEach((tiltElement) => {
      Tilt.init(tiltElement as HTMLElement, { // Type assertion added
        max: 15,
        perspective: 1500,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        glare: false,
        "max-glare": 0.2,
        scale: 1.01,
      });
    });
  }, []);

  return (
    <div className="principal">
      <div className="title">
        <h1>Alguns de nossos projetos:</h1>
      </div>
    <Center bg={"blackAlpha.800"} className="responsive" py={6}>
      <div
        className="card"
        onClick={() =>
          window.open(
            "https://www.vendasexternas.com.br/",
            "_blank"
          )
        }
      >
        <h3>Sistema Vendas Externas</h3>
        <Img
          className="imgs1"
          src={"https://images2.imgbox.com/11/91/2tvMgHgw_o.png"}
          roundedTop={"sm"}
          objectFit="contain"
          h="full"
          w="full"
          alt={"Blog Image"}
        />
      </div>

      <div
        className="card"
        onClick={() =>
          window.open(
            "https://www.auchan.pt/pt/homepage?m=1",
            "_blank"
          )
        }
      >
        <h3>Site mercado Auchan</h3>
        <Img
          className="imgs1"
          src={"https://images2.imgbox.com/99/35/G6iRCzjQ_o.png"}
          roundedTop={"sm"}
          objectFit="contain"
          h="full"
          w="full"
          alt={"Blog Image"}
        />
      </div>

      <div
        className="card"
        onClick={() =>
          window.open(
            "https://www.worten.pt/",
            "_blank"
          )
        }
      >
        <h3>Site Worten</h3>
        <Img
          className="imgs1"
          src={"https://images2.imgbox.com/20/e3/mnicX5CD_o.png"}
          roundedTop={"sm"}
          objectFit="contain"
          h="full"
          w="full"
          alt={"Blog Image"}
        />
      </div>

      <div
        className="card"
        onClick={() =>
          window.open(
            "http://nexly.netlify.app/",
            "_blank"
          )
        }
      >
        <h3>Plataforma Nexly</h3>
        <Img
          className="imgs1"
          src={"https://images2.imgbox.com/4a/77/mIMfLHvp_o.png"}
          roundedTop={"sm"}
          objectFit="contain"
          h="full"
          w="full"
          alt={"Blog Image"}
        />
      </div>

      <div
        className="card"
        onClick={() =>
          window.open(
            "https://play.google.com/store/apps/details?id=com.id.concursos&hl=pt&gl=US&pli=1",
            "_blank"
          )
        }
      >
        <h3>Simulado concursos online</h3>
        <Img
          className="imgs1"
          src={
            "https://play-lh.googleusercontent.com/im9c5uoOtgQxCKV2VdF8Lu1VI2aGxJ_tfjqJVEdEYHxKdwv2r_dILAg7kbxBKxaI9QQ=w600-h300-pc0xffffff-pd"
          }
          roundedTop={"sm"}
          objectFit="contain"
          h="full"
          w="full"
          alt={"Blog Image"}
        />
      </div>

      <div
        className="card"
        onClick={() =>
          window.open(
            "https://play.google.com/store/apps/details?id=com.lealApps.pedro.gymWorkoutPlan&hl=pt&gl=US",
            "_blank"
          )
        }
      >
        <h3>Gym WP</h3>
        <Img
          className="imgs1"
          src={
            "https://cdn6.aptoide.com/imgs/4/e/b/4eb87fae19605cc7390badaa01da8f28_fgraphic.png"
          }
          roundedTop={"sm"}
          objectFit="contain"
          h="full"
          w="full"
          alt={"Blog Image"}
        />
      </div>

      <div
        className="card"
        onClick={() =>
          window.open(
            "https://play.google.com/store/apps/details?id=com.lealapps.alimentese&hl=pt&gl=US",
            "_blank"
          )
        }
      >
        <h3>App Alimente-se - Dieta e Nutrição</h3>
        <Img
          className="imgs1"
          src={
            "https://cdn6.aptoide.com/imgs/e/e/0/ee07953fc686c9f12211cc198b498c36_fgraphic.png"
          }
          roundedTop={"sm"}
          objectFit="contain"
          h="full"
          w="full"
          alt={"Blog Image"}
        />
      </div>

      <div
        className="card"
        onClick={() =>
          window.open(
            "https://play.google.com/store/apps/details?id=com.sygic.aura&hl=pt&gl=US",
            "_blank"
          )
        }
      >
        <h3>Sygic GPS Navigation & Maps</h3>
        <Img
          className="imgs1"
          src={
            "https://play-lh.googleusercontent.com/Auus7c6wK19_3x8nR1Tv7u1rNj-crC4Dpd80OgbQXg1XaESIahsSPP_WFflxcT07QkWb=w526-h296-rw"
          }
          roundedTop={"sm"}
          objectFit="contain"
          h="full"
          w="full"
          alt={"Blog Image"}
        />
      </div>
    </Center>
    </div>
  );
}
