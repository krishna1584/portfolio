import React from "react";
import { Container } from "../../styles/pages/Blog";
import Head from "next/head";

function Blog() {
  return (
    <Container>
      <Head>
        <title>Krishna — Blog</title>
      </Head>
      
      {/* Coming Soon message */}
      <h1>Coming Soon</h1>
      <p>Stay tuned for exciting content!</p>
    </Container>
  );
}

export const getStaticProps = async () => {
  // No data fetching needed since there's no content
  return {
    props: {},
  };
};

export const getStaticPaths = async () => {
  // No paths needed since there's no blog content
  return {
    paths: [],
    fallback: false,
  };
};

export default Blog;
