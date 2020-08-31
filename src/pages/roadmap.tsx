import React from "react";
import { SEO, Layout } from "../components";
import { Roadmap } from "../sections";

export default () => {
	return (
		<Layout>
			<SEO includeSchema title="Roadmap | Pomatez" />
			<Roadmap />
		</Layout>
	);
};
