import Head from "next/head";
import React from "react";
import PageTitle from "../../components/PageTitle";
import SkillCard from "../../components/SkillCard";
import {
  Container,
  AboutMe,
  Skills,
  FirstRow,
  PictureContainer,
  AboutMeTitle,
  AboutMeParagraph,
  FirstColumn,
  ResumeTitle,
  CVButton,
  NameTitle,
  ExperienceContainer,
  CVContainer,
  SecundaryRow,
  SecundaryColumn,
  TitleContainer,
  ServicesParagraph,
  TechsContainer,
  TechP
} from "../../styles/pages/About";
import { motion } from "framer-motion";
import { IoLogoPython, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiCplusplus, SiC, SiMongodb, SiMysql } from "react-icons/si";
import { BsFileText, BsFillFileTextFill } from "react-icons/bs";
import { useRouter } from "next/router";

function About() {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Krishna — About Me</title>
      </Head>
      <PageTitle
        title="about"
        stretchedLetter="b"
        overlayTitle="techs | experiences | skills"
      />
      <AboutMe>
        <FirstRow>
          <PictureContainer src="/static/assets/pfp.jpg" />
          <FirstColumn>
            <AboutMeTitle>Hello 👋</AboutMeTitle>
            <NameTitle>
              I'm <span>Krishna</span>
            </NameTitle>
            <AboutMeTitle>
              A <span className="colored">Full-Stack</span> Developer.
            </AboutMeTitle>
            <AboutMeParagraph>
              I am a Full-Stack Developer passionate about building efficient and scalable web applications.
              My expertise lies in front-end development using React and back-end systems with technologies like 
              MySQL and MongoDB. I also have strong proficiency in C++, C, Python, and JavaScript, ensuring well-rounded 
              skills in both system-level programming and web development. My focus is on performance, user experience, 
              and crafting solutions that meet the highest standards.
            </AboutMeParagraph>
            <ExperienceContainer>
              <div className="line"></div>
              <span>Past Experiences</span>
            </ExperienceContainer>
            <CVContainer>
              <p>Want to know more about my education and experience.</p>
              <CVButton onClick={() => router.push("/static/files/curriculum_vitae.pdf")}>
                <span>Download CV</span>
              </CVButton>
            </CVContainer>
          </FirstColumn>
        </FirstRow>
        <SecundaryColumn>
          <TitleContainer>
            <NameTitle>
              My <span>SERVICES</span>
            </NameTitle>
            <AboutMeTitle>
              Delivering <span className="colored">Impactful Solutions</span> through Innovation and Collaboration
            </AboutMeTitle>
          </TitleContainer>
          <ServicesParagraph>
            With my diverse skill set, I offer development services in areas such as web and systems programming.
            I can build efficient full-stack web applications and provide back-end support using databases like MySQL and MongoDB. 
            My experience in C++, C, Python, and JavaScript also enables me to contribute to systems-level projects and algorithmic solutions.
            <span className="colored">Get in touch</span> to discuss how I can contribute to your next project.
          </ServicesParagraph>
          <ExperienceContainer>
              <div className="line"></div>
              <span>My Skills</span>
            </ExperienceContainer>
          <TechsContainer>
            <TechP>
              <SiCplusplus />
              <span>C++</span>
            </TechP>
            <TechP>
              <SiC />
              <span>C</span>
            </TechP>
            <TechP>
              <IoLogoPython />
              <span>Python</span>
            </TechP>
            <TechP>
              <IoLogoJavascript />
              <span>JavaScript</span>
            </TechP>
            <TechP>
              <FaReact />
              <span>React.Js</span>
            </TechP>
            <TechP>
              <SiMongodb />
              <span>MongoDB</span>
            </TechP>
            <TechP>
              <SiMysql />
              <span>MySQL</span>
            </TechP>
          </TechsContainer>
        </SecundaryColumn>
      </AboutMe>
    </Container>
  );
}

export default About;
