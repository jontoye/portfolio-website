import React from 'react';
import { Card, CardContent, Container, Grid, Link, Typography, useTheme } from '@mui/material';
import GrowthImg from '../images/growth.png';
import PuzzleImg from '../images/puzzle.png';
import LoveImg from '../images/love.png';

const skills = [
  { id: 1, name: 'Love creating and growing things', img: GrowthImg },
  { id: 2, name: 'Proven ability to solve problems', img: PuzzleImg },
  { id: 3, name: 'Friendly and empathetic communication', img: LoveImg },
];

const styles = {
  section: {
    marginTop: { xs: '1rem', sm: '2rem', md: '12rem' },
    marginBottom: { xs: '1rem', sm: '2rem', md: '9.2rem' },
  },
  summary: {
    margin: '0 auto',
    marginBottom: '5rem',
  },
  summaryContent: {
    fontSize: '1.125rem',
    lineHeight: 1.5,
    marginBottom: '1.5rem',
  },
  skills: {
    display: 'flex',
    flexDirection: { xs: 'column', custom: 'row' },
    justifyContent: 'space-between',
    margin: '0 auto',
    padding: '2rem 4rem',
    backgroundColor: 'customTeal.main',
    borderRadius: '1rem',
    boxShadow: (theme) => theme.shadows[8],
  },
  skillCard: {
    textAlign: 'center',
    width: { xs: '100%', custom: '12rem', md: '14rem' },
    marginBottom: { xs: '1rem', md: 0 },
    borderRadius: '1rem',
    cursor: 'pointer',
    transition: (theme) => theme.transitions.create(),

    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
};

const SkillCard = ({ skill, img }) => {
  return (
    <Card sx={styles.skillCard} elevation={3}>
      <CardContent>
        <img src={img} alt={skill} />
        <Typography variant="subtitle2">{skill}</Typography>
      </CardContent>
    </Card>
  );
};

const About = () => {
  const theme = useTheme();
  return (
    <Container id="about">
      <Grid container sx={styles.section}>
        <Grid item xs={11} sm={10} sx={styles.summary}>
          <Typography variant="h4" gutterBottom>
            About me
          </Typography>
          <Typography sx={styles.summaryContent}>
            I am a recent graduate from General Assembly’s Software Engineering Immersive (SEI)
            program with a passion for technology and learning. I have a degree in civil
            engineering, and also happen to be a professional chef and baker, most recently part of
            the core team at one of Toronto’s top bakeries.
          </Typography>
          <Typography sx={styles.summaryContent}>
            Ultimately my diverse experiences all tie back to a passion for designing, creating,
            analyzing and optimizing - whether it be a web application, a building repair strategy,
            or the perfect loaf of bread! I am excited about establishing a career in the tech
            industry and would love to{' '}
            <Link
              color={theme.palette.mode === 'light' ? 'customBlue.main' : 'customTeal.main'}
              href="#contact">
              connect.
            </Link>{' '}
            Take a look at some of{' '}
            <Link
              color={theme.palette.mode === 'light' ? 'customBlue.main' : 'customTeal.main'}
              href="#projects">
              my projects{' '}
            </Link>
            below!
          </Typography>
        </Grid>
        <Grid item xs={11} sm={10} sx={styles.skills}>
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill.name} img={skill.img} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
