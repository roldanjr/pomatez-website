import React from "react";
import { SEO, Layout } from "components";
import { Hero, Features, HowItWorks, RoadMap, Download } from "sections";

export default () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features />
    <HowItWorks />
    <RoadMap />
    <Download />
  </Layout>
);
