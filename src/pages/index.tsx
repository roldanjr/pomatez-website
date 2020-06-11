import React from "react";
import { SEO, Layout } from "components";
import { Hero, Features, HowItWorks, RoadMap } from "sections";

export default () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features />
    <HowItWorks />
    <RoadMap />
  </Layout>
);
