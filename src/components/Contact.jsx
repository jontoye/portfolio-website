import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';

const styles = {
  section: {
    marginTop: { xs: '1rem', sm: '2rem', md: '9.2rem' },
    marginBottom: { xs: '1rem', sm: '2rem', md: '9.2rem' },
  },
  summary: {
    margin: '0 auto',
    marginBottom: '5rem',
  },
  summaryContent: {
    fontSize: '1.125rem',
    lineHeight: 1.5,
    marginBottom: '2rem',
  },
};

const Contact = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  return (
    <Container id="contact">
      <Grid container sx={styles.section}>
        <Grid item xs={10} sx={styles.summary}>
          <Typography variant="h4" gutterBottom>
            Get in touch
          </Typography>
          <Typography sx={styles.summaryContent}>
            I&apos;d love to hear from you! Send me a message below if you are interested in working
            together or have any questions/comments about my work!
          </Typography>

          <TextField
            value={message}
            fullWidth
            multiline
            rows={10}
            required
            placeholder="Your message here..."
            onChange={(e) => setMessage(e.target.value)}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            fullWidth
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginBottom: '1rem' }}
          />

          <Button
            variant="contained"
            color="customTeal"
            size="large"
            href={`mailto:jontoye@gmail.com?subject=Nice%20Portfolio!&body=${message}%0A%0A- ${name}`}>
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
