import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { SiteMetaProps, MarkDownProps } from "types";
import { APP_VERSION } from "configurations";

type QueryProps = SiteMetaProps & MarkDownProps;

type MetaProps =
  | React.DetailedHTMLProps<
      React.MetaHTMLAttributes<HTMLMetaElement>,
      HTMLMetaElement
    >[]
  | undefined;

type Props = {
  title?: string;
  description?: string;
  lang?: string;
  meta?: MetaProps;
  metaImage?: {
    src: string;
    width: number;
    height: number;
  };
  includeSchema?: boolean;
};

const SEO: React.FC<Props> = ({
  title,
  description,
  lang,
  meta,
  includeSchema,
}) => {
  const { site, allMarkdownRemark } = useStaticQuery<QueryProps>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            author
            siteUrl
            twitterUsername
            googleVerification
          }
        }
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
          edges {
            node {
              frontmatter {
                screenShot {
                  childImageSharp {
                    resize(width: 1600) {
                      src
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const {
    frontmatter: { screenShot },
  } = allMarkdownRemark.edges[0].node;

  const socialPreviewLight = screenShot.childImageSharp.resize;

  const metaTitle =
    title || `${site.siteMetadata.title} - Be Productive and Effective`;

  const metaDescription = description || site.siteMetadata.description;

  const getMeta = () => {
    const defaultMeta: MetaProps = [
      {
        name: `description`,
        content: metaDescription,
      },
      {
        name: `keywords`,
        content: site.siteMetadata.keywords.join(", "),
      },
      {
        name: `google-site-verification`,
        content: site.siteMetadata.googleVerification,
      },
      {
        property: `og:title`,
        content: metaTitle,
      },
      {
        property: `og:description`,
        content: metaDescription,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        property: `og:url`,
        content: site.siteMetadata.siteUrl,
      },
      {
        name: `twitter:creator`,
        content: site.siteMetadata.author,
      },
      {
        name: `twitter:title`,
        content: metaTitle,
      },
      {
        name: `twitter:description`,
        content: metaDescription,
      },
    ].concat(
      socialPreviewLight
        ? [
            {
              property: "og:image",
              content: site.siteMetadata.siteUrl + socialPreviewLight.src,
            },
            {
              property: "og:image:width",
              content: `${socialPreviewLight.width}`,
            },
            {
              property: "og:image:height",
              content: `${socialPreviewLight.height}`,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            },
          ]
        : [
            {
              name: "twitter:card",
              content: "summary",
            },
          ]
    );

    if (meta) {
      defaultMeta.concat(meta);
    }

    return defaultMeta;
  };

  const schemaMarkup = {
    "@context": "http://schema.org",
    "@type": "SoftwareApplication",
    name: site.siteMetadata.title,
    image: site.siteMetadata.siteUrl + socialPreviewLight.src,
    url: site.siteMetadata.siteUrl,
    author: {
      "@type": "Person",
      name: site.siteMetadata.author,
    },
    applicationCategory: "LifestyleApplication",
    downloadUrl:
      "https://github.com/roldanjrCodeArts9711/productivity-timer/releases",
    operatingSystem: "Windows, Linux, macOS",
    screenshot: site.siteMetadata.siteUrl + socialPreviewLight.src,
    softwareVersion: APP_VERSION,
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={metaTitle}
      meta={getMeta()}
      link={[
        {
          rel: "sitemap",
          type: "application/xml",
          href: "/sitemap.xml",
        },
        {
          rel: "canonical",
          href: site.siteMetadata.siteUrl,
        },
      ]}
      defer={false}
    >
      {includeSchema && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  includeSchema: true,
};

export default SEO;
