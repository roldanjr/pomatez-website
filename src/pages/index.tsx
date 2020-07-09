import React from "react";
import { SEO, Layout } from "components";
import { Landing, Features, HowItWorks, RoadMap, Download } from "sections";

export default () => {
  return (
    <Layout>
      <SEO includeSchema />
      <Landing />
      <Features />
      <HowItWorks />
      <RoadMap />
      <Download />
    </Layout>
  );
};
