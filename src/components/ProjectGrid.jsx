import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Grid, Typography } from '@mui/material';

const styles = {
  section: {
    marginTop: '2rem',
  },
  title: {
    margin: '0 auto',
  },
};

const ProjectGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            name
          }
        }
      }
    }
  `);

  return (
    <Container id="projects">
      <Grid container sx={styles.section}>
        <Grid item xs={12} md={10} sx={styles.title}>
          <Typography variant="h5">Projects</Typography>
        </Grid>
        <ul>
          {data.allMdx.nodes.map((node) => (
            <li key={node.frontmatter.name}>
              <Typography variant="h6">{node.frontmatter.name}</Typography>
            </li>
          ))}
        </ul>
      </Grid>
    </Container>
  );
};

export default ProjectGrid;
