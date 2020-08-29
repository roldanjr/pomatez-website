import React from "react";
import { SEO, Layout } from "../components";
import { Landing, Features, Boosters, RoadMap, Download } from "../sections";

export default () => {
	return (
		<Layout>
			<SEO includeSchema />
			<Landing />
			<Features />
			<Boosters />
			<RoadMap />
			<Download />
		</Layout>
	);
};
