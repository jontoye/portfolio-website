import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Paper,
  useMediaQuery,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ProjectCard from './ProjectCard';
import { Typography } from '@mui/material';

const styles = {
  section: {
    marginTop: '2rem',
  },
  summary: {
    margin: '0 auto',
    marginBottom: '4rem',
  },
  summaryContent: {
    fontSize: '1.125rem',
    lineHeight: 1.5,
  },
  title: {
    margin: '0 auto',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '4rem',
    flexWrap: 'wrap',
  },
  carousel: {
    maxWidth: '500px',
    margin: '0 auto',
  },
  projectList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

const ProjectGrid = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(0);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box
      id="projects"
      sx={{ backgroundColor: (theme) => theme.palette.action.hover, padding: '6rem 0' }}>
      <Container>
        <Grid container>
          <Grid item xs={10} sx={styles.summary}>
            <Typography variant="h4" gutterBottom>
              My Projects
            </Typography>
            <Typography sx={styles.summaryContent}>
              Things that I&apos;ve built, both individually and collaboratively.
            </Typography>
          </Grid>
        </Grid>

        <Box sx={styles.grid}>
          {!isSmallScreen &&
            data.allMdx.nodes.map((node) => (
              <ProjectCard
                key={node.frontmatter.name}
                project={node.frontmatter}
                description={node.body}
              />
            ))}
        </Box>

        {isSmallScreen && (
          <Grid container columns={10} spacing={2}>
            <Grid item xs={10} md={6} order={{ xs: 2, md: 1 }}>
              <Carousel
                next={(cur) => setSelectedProject(cur)}
                prev={(cur) => setSelectedProject(cur)}
                interval={8000}
                indicators={false}
                navButtonsAlwaysVisible={true}
                index={selectedProject}
                animation="slide"
                duration={1000}
                height={520}
                sx={styles.carousel}>
                {data.allMdx.nodes.map((node) => (
                  <ProjectCard
                    key={node.frontmatter.name}
                    project={node.frontmatter}
                    description={node.body}
                  />
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={10} md={4} order={{ xs: 1, md: 2 }} sx={styles.projectList}>
              <Paper>
                <List>
                  {data.allMdx.nodes.map((node, i) => (
                    <ListItem key={i}>
                      <ListItemButton
                        sx={{ '& .Mui-selected': { backgroundColor: 'customTeal' } }}
                        selected={selectedProject === i}
                        onClick={() => setSelectedProject(i)}>
                        {node.frontmatter.name}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default ProjectGrid;
