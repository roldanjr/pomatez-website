import React from "react";
import { SEO, Layout } from "components";
import { Landing, Features, HowItWorks, RoadMap, Download } from "sections";

export default () => (
  <Layout>
    <SEO includeSchema={false} />
    <Landing />
    <Features />
    <HowItWorks />
    <RoadMap />
    <Download />
  </Layout>
);
