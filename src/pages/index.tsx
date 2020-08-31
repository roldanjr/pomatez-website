import React from "react";
import { SEO, Layout } from "../components";
import { Landing, Features, Boosters, Roadmap, Download } from "../sections";

export default () => {
	return (
		<Layout>
			<SEO includeSchema />
			<Landing />
			<Features />
			<Boosters />
			<Roadmap />
			<Download />
		</Layout>
	);
};
