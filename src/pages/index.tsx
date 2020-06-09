import React from "react";
import { SEO, Layout } from "components";
import { Hero, Features } from "sections";

export default () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features />
  </Layout>
);
