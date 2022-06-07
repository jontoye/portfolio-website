import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const SEO = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
          }
        }
      }
    `
  );

  const { title, image } = site.siteMetadata;

  return <Helmet title={title} meta={[{ property: 'og:image', content: image }]} />;
};

export default SEO;
