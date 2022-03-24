/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  root: {
    color: '#89919a',
    display: 'flex',
    flexDirection: 'row',
  },

  contactHeading: {
    fontSize: '3rem',
    color: '#89919a',
    fontWeight: 600,
    letterSpacing: '1px',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
  },

  input: {
    background: 'none',
    border: 'none',
    borderBottom: '1px solid #89919a',
    fontSize: '1.2rem',
    margin: '20px 0',
    color: '#89919a',
  },

  contactContent: {
    color: '#89919a',
  }
});

function ContactForm() {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h1" className={classes.contactHeading}>CONTACT ME</Typography>
      <div container={classes.root}>
      <div>
        <form className={classes.form}>
            <input type="text" className={classes.input} placeholder="Please write your name" maxLength={30}/>
            <input type="email" className={classes.input} placeholder="Please write your email" />
            <textarea rows="4" cols="50" className={classes.input} placeholder="Please write your message" maxLength={500} />
        </form>
        <Button>SEND</Button>
      </div>
      <div className={classes.contactContent}>
        <p>If you liked my work, please reach out to me. 
          I will chose the most convenient time and place. 
          Do not forget to bring a good mood.
        </p>
        <div>
          <p>MY PHONE</p>
          <p>+38349301843</p>
        </div>
        <div>
          <p>MY EMAIL</p>
          <p>donardgolaj@gmail.com</p>
        </div>
      </div>
      </div>
    </Container>
  );
}

export default ContactForm;
