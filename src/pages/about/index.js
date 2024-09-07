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
import {IoLogoJavascript, IoLogoReact, IoLogoPython, IoLogoFigma, } from "react-icons/io"
import {FaReact, FaFigma, FaNodeJs} from "react-icons/fa"
import { BsFileText, BsFillFileTextFill } from "react-icons/bs";
import {SiTypescript} from "react-icons/si"
import { useRouter } from "next/router";

function About() {
  const router = useRouter()

  const data = {
    cardOne: {
      title: "Frameworks",

      first: {
        alt: "ReactJS",
        icon: "reacticon.png",
      },
      second: {
        alt: "NextJS",
        icon: "nextjs.png",
      },
      third: {
        alt: "Bootstrap",
        icon: "bootstrap.png",
      },
    },
    cardTwo: {
      title: "Languages",

      first: {
        alt: "JavaScript",
        icon: "javascript.png",
      },
      second: {
        alt: "Python",
        icon: "python.png",
      },
      third: {
        alt: "Sass",
        icon: "sass.png",
      },
    },
    cardThree: {
      title: "Tools",

      first: {
        alt: "Linux",
        icon: "linux.png",
      },
      second: {
        alt: "NodeJS",
        icon: "node.png",
      },
      third: {
        alt: "Mongo Database",
        icon: "mongodb.svg",
      },
    },
  };
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
              A <span className="colored">Frontend</span> Developer.
            </AboutMeTitle>
            <AboutMeParagraph>
            I am a Frontend Developer and a content creator passionate about crafting intuitive and responsive web solutions. 
            I specialize in creating seamless user interfaces and building efficient, scalable back-end systems. By combining my skills in
             front-end technologies like React and back-end development with databases like MySQL and MongoDB, I deliver websites that are
              both visually appealing and highly functional. My focus is on performance, user experience, and ensuring that every
               project meets the highest standards of usability and design.
            </AboutMeParagraph>
            {/* <ResumeTitle>
              <BsFileText size={30} />
              <h4>Past Experience</h4>
            </ResumeTitle> */}
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
              Empowering <span className="colored">Success</span> through Efficient Collaboration: Leveraging the
              Right Tools and Structured Processes
            </AboutMeTitle>
          </TitleContainer>
          <ServicesParagraph>
            As a content creator, I have made valuable contributions to various projects, leveraging my creativity and expertise to enhance their success.
            My diverse experience allows me to tackle unique challenges across different niches, adapting to the specific needs of each audience.
            If you're looking for a <span className="colored">dedicated professional</span> passionate about delivering impactful content, I'm here to help.
            <span className="colored">Get in touch</span> to discuss how I can contribute to the success of your next project."
          </ServicesParagraph>
          <ExperienceContainer>
              <div className="line"></div>
              <span>My Skills</span>
            </ExperienceContainer>
          <TechsContainer>
            <TechP>
              <IoLogoJavascript />
              <span>Javascript ES6+</span>
            </TechP>
            <TechP>
              <FaReact />
              <span>React.Js</span>
            </TechP>
            <TechP>
              <FaFigma />
              <span>Figma</span>
            </TechP>
            <TechP>
              <IoLogoPython />
              <span>Python</span>
            </TechP>
            <TechP>
              <SiTypescript />
              <span>Typscript</span>
            </TechP>
            <TechP>
              <FaNodeJs />
              <span>Node.Js</span>
            </TechP>
          </TechsContainer>
        </SecundaryColumn>
      </AboutMe>
    </Container>
  );
}

export default About;
