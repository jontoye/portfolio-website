import React from 'react';
import { Box, Container, Link, Grid, Typography } from '@mui/material';

const styles = {
  section: {
    backgroundColor: 'customTeal.main',
    color: 'black',
  },
  container: {
    padding: '2rem 0',
    textAlign: { xs: 'center', sm: 'unset' },
  },
  initials: {
    letterSpacing: '8px',
    fontWeight: '200',
    color: 'customBlue.main',
  },
};

const Footer = ({ data }) => {
  return (
    <Box sx={styles.section}>
      <Container sx={styles.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={8}>
            <Typography variant="h3" sx={styles.initials}>
              JT
            </Typography>
            <Typography variant="caption">&copy;2022 Jonathan Toye</Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Typography variant="subtitle" color="customBlue.main">
              Projects
            </Typography>
            {data.allMdx.nodes.map((node) => (
              <Link
                key={node.frontmatter.name}
                display="block"
                color="inherit"
                href={node.frontmatter.url}
                target="_blank">
                {node.frontmatter.name}
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Typography variant="subtitle" color="customBlue.main">
              Contact
            </Typography>
            <Link
              color="inherit"
              display="block"
              href="mailto:jontoye@gmail.com?subject=Nice%20Portfolio!">
              Email
            </Link>
            <Link
              color="inherit"
              display="block"
              href="https://github.com/jontoye/"
              target="_blank">
              GitHub
            </Link>
            <Link
              color="inherit"
              display="block"
              href="https://www.linkedin.com/in/jonathan-toye/"
              target="_blank">
              LinkedIn
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
