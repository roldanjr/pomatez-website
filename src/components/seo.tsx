import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { SiteMetaProps } from "types";

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
  metaImage,
  includeSchema,
}) => {
  const { site } = useStaticQuery<SiteMetaProps>(
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
          }
        }
      }
    `
  );

  const metaTitle = title || site.siteMetadata.title;

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
      metaImage
        ? [
            {
              property: "og:image",
              content: `${site.siteMetadata.siteUrl}${metaImage.src}`,
            },
            {
              property: "og:image:width",
              content: `${metaImage.width}`,
            },
            {
              property: "og:image:height",
              content: `${metaImage.height}`,
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

  const schemaMarkup = {};

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
