import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Container, ComingSoonWrapper, ComingSoonTitle, ComingSoonText } from "../../styles/pages/BlogMain";
import PageTitle from "../../components/PageTitle";

export default function Blog() {
  return (
    <Container>
      <Head>
        <title>Krishna — Blog</title>
      </Head>

      <PageTitle title="blog" stretchedLetter="b" overlayTitle="tutorials | documentation | life" />

      {/* Coming Soon section */}
      <ComingSoonWrapper>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <ComingSoonTitle>Coming Soon</ComingSoonTitle>
          <ComingSoonText>
            We are working on some amazing content! Check back soon for updates.
          </ComingSoonText>
        </motion.div>
      </ComingSoonWrapper>
    </Container>
  );
}

export const getStaticProps = async () => {
  // No need to fetch blog data anymore since blog cards are removed
  return {
    props: {},
  };
};
