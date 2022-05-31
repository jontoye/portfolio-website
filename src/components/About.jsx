import React from 'react';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';

const skills = [
  { id: 1, name: 'Love creating and growing things', img: 'images/growth.png' },
  { id: 2, name: 'Proven ability to solve problems', img: 'images/puzzle.png' },
  { id: 3, name: 'Friendly and empathetic communication', img: 'images/love.png' },
];

const styles = {
  section: {
    marginTop: { xs: '2rem', sm: '7rem', md: '9rem' },
  },
  summary: {
    margin: '0 auto',
  },
  skills: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
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
    <Container id="about" /*sx={{ backgroundColor: 'action.hover'}}*/>
      <Grid container sx={styles.section} spacing={5}>
        <Grid item xs={10} /*md={8}*/ sx={styles.summary}>
          <Typography variant="h6" gutterBottom>
            About me
          </Typography>
          <Typography variant="body">
            I am a recent bootcamp graduate with a passion for learning and a wide range of skills
            and interests. As a former Cook/Baker with a degree in Civil Engineering, I have a
            unique skill set that blends analytical thinking with creativity - exactly what is
            needed to build beautiful websites that solve problems! Take a look at some of{' '}
            <a href="#projects">my projects</a> below and <a href="#">get in touch</a> to learn
            more!
          </Typography>
        </Grid>
        <Grid item xs={10} /*md={4}*/ sx={styles.skills}>
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill.name} img={skill.img} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
