import React from 'react';
import { Card, CardContent, Container, Grid, Link, Typography } from '@mui/material';
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
    marginTop: { xs: '1rem', sm: '2rem', md: '9.2rem' },
    marginBottom: { xs: '1rem', sm: '2rem', md: '9.2rem' },
  },
  summary: {
    margin: '0 auto',
  },
  summaryContent: {
    fontSize: '1.125rem',
    lineHeight: 1.5,
  },
  skills: {
    display: 'flex',
    flexDirection: { xs: 'column', custom: 'row' },
    justifyContent: 'space-between',
    margin: '0 auto',
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
  return (
    <Container id="about">
      <Grid container sx={styles.section} spacing={5}>
        <Grid item xs={11} sm={10} sx={styles.summary}>
          <Typography variant="h5" gutterBottom>
            About me
          </Typography>
          <Typography sx={styles.summaryContent}>
            I am a recent bootcamp graduate with a passion for learning and a wide range of skills
            and interests. As a former Cook/Baker with a degree in Civil Engineering, I have a
            unique skill set that blends analytical thinking with creativity - exactly what is
            needed to build beautiful websites that solve problems! Take a look at some of{' '}
            <Link href="#projects">my projects</Link> below and <Link href="#">get in touch</Link>{' '}
            to learn more!
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
