import React from "react";
import background from "/public/static/assets/background.gif";
import {
  Container,
  Title,
  SubTitle,
  Letter,
  Wrapper,
  About,
  Background,
  ViewButton,
  ContactButton,
  HeroFooter,
  Main
} from "./styles";
import { Fade, Flip, Zoom } from "react-reveal";
import { BsEye, BsChat } from "../../styles/Icons";
import { useRouter } from "next/router";
import Head from "next/head";

function Hero() {
  const router = useRouter();

  return (
    <Container>
      <Background image={background} />
      <Head>
        <title>Krishna Yadav — Frontend Developer</title>
      </Head>
      <Wrapper>
        <Main>
          <Fade top>
            <Title>
              <Letter className="stretch">K</Letter>
              <Letter>R</Letter>
              <Letter>I</Letter>
              <Letter>S</Letter>
              <Letter>H</Letter>
              <Letter>N</Letter>
              <Letter className="stretch">A</Letter>
            </Title>
          </Fade>
          <Fade top delay={100}>
            <SubTitle>
              <Letter className="coded">Y</Letter>
              <Letter className="coded">A</Letter>
              <Letter className="coded">D</Letter>
              <Letter className="stretch coded">A</Letter>
              <Letter className="stretch coded">V</Letter>
            </SubTitle>
          </Fade>
          <Flip top delay={600}>
            <About>
              Front-end web <span>developer</span> and Content Creator
            </About>
          </Flip>
        </Main>
        <HeroFooter>
          <Fade left delay={800}>
            <ViewButton onClick={() => router.push("/about")}>
              <BsEye /> see more about me
            </ViewButton>
          </Fade>
          <Fade right delay={800}>
            <ContactButton onClick={() => router.push("/projects")}>
              <BsChat /> My Work
            </ContactButton>
          </Fade>
        </HeroFooter>
      </Wrapper>
    </Container>
  );
}

export default Hero;
