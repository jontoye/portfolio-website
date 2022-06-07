import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

const styles = {
  card: {
    width: '500px',
  },
  cardActions: {
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
  },
};

const ProjectCard = ({ project, description }) => {
  const theme = useTheme();

  return (
    <Card sx={styles.card} raised>
      <CardMedia
        component="img"
        image={project.image}
        alt={`${project.name} sample`}
        height="300px"
      />

      <CardContent>
        <Typography variant="h5">{project.name}</Typography>
        <MDXRenderer>{description}</MDXRenderer>

        <Stack direction="row" spacing={1} sx={{ marginTop: '1rem' }}>
          {project.tech.map((item) => (
            <Chip key={item} label={item} />
          ))}
        </Stack>

        <Stack direction="row" sx={styles.cardActions}>
          <Button
            variant="text"
            color={theme.palette.mode === 'light' ? 'customBlue' : 'customTeal'}
            target="_blank"
            href={project.github}
            startIcon={<GitHubIcon />}>
            GitHub
          </Button>
          <Button
            color={theme.palette.mode === 'light' ? 'customBlue' : 'customTeal'}
            target="_blank"
            href={project.url}
            endIcon={<OpenInNewIcon />}>
            Go to site
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
