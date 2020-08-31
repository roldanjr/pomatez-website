import React from "react";
import { SEO, Layout } from "../components";
import { Features } from "../sections";

export default () => {
	return (
		<Layout>
			<SEO includeSchema title="Features | Pomatez" />
			<Features />
		</Layout>
	);
};
