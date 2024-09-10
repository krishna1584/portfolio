import React, { useState, useEffect } from "react";
import {
  Container,
  ProjectWrapper,
  AppDetails,
  Thumbnail,
  DateContainer,
  ThumbnailWrapper,
  ProjectsMain
} from "../../styles/pages/Projects";
import PageTitle from "../../components/PageTitle";
import { useRouter } from "next/router";

function Projects() {
  const router = useRouter();

  return (
    <Container>
      <PageTitle
        title="projects"
        stretchedLetter="r"
        overlayTitle="Contributions | Projects"
      />

      <ProjectsMain>
        <ProjectWrapper onClick={() => window.open("https://tradex1.vercel.app/", "_blank")}>
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>SEPTEMBER, 2024</span>
                <div className="line"></div>
              </DateContainer>
              <h1>TradeX</h1>
              <h2>Dive into the sea of Indian Stock Market with real time analysis.</h2>
            </AppDetails>
            <Thumbnail
              src="/static/projects/tradex.png"
              className="thumb"
            />
          </ThumbnailWrapper>
        </ProjectWrapper>


        <ProjectWrapper onClick={() => window.open("https://isro-website1.netlify.app/", "_blank")}>
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>MAY, 2023</span>
                <div className="line"></div>
              </DateContainer>
              <h1>ISRO WEB</h1>
              <h2>A modified website for ISRO.</h2>
            </AppDetails>
            <Thumbnail
              src="/static/projects/isro.png"
              className="thumb"
            />
          </ThumbnailWrapper>
        </ProjectWrapper>


        <ProjectWrapper onClick={() => window.open("https://tourify1.netlify.app/", "_blank")}>
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>MARCH, 2024</span>
                <div className="line"></div>
              </DateContainer>
              <h1>Tourify</h1>
              <h2>Indian Tourism Website.</h2>
            </AppDetails>
            <Thumbnail
              src="/static/projects/tourify.png"
              className="thumb"
            />
          </ThumbnailWrapper>
        </ProjectWrapper>

        <ProjectWrapper onClick={() => window.open("https://hangman-game-nine-tan.vercel.app/", "_blank")}>
          <ThumbnailWrapper>
            <AppDetails>
              <DateContainer>
                <div className="line"></div>
                <span>DECEMBER, 2023</span>
                <div className="line"></div>
              </DateContainer>
              <h1>Hangman Game</h1>
              <h2>A word guessing game.</h2>
            </AppDetails>
            <Thumbnail
              src="/static/projects/hangman.png"
              className="thumb"
            />
          </ThumbnailWrapper>
        </ProjectWrapper>

        
      </ProjectsMain>
    </Container>
  );
}

export default Projects;
