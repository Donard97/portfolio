import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  Grid, CardActionArea, Button, Container,
} from '@mui/material';
import project from './project.PNG';

const useStyles = makeStyles({
  root: {
    marginTop: 100,
  },

  card: {
    height: 'auto',
    border: '1px solid #89919a',
    background: '#0e1117',
    color: '#89919a',
    borderRadius: '10px',
  },

  title: {
    margin: '0 25px',
    fontWeight: '600',
    color: '#89919a',
    fontSize: '1.5rem',
  },

  projectTitle: {
    margin: '15px',
    fontWeight: '600',
    fontSize: '1.2rem',
  },

  content: {
    margin: '15px',
    border: '1px solid #89919a',
    background: '#0b0d12',
    borderRadius: '10px',
    bottom: 0,
  },

  liveBtn: {
    width: '94%',
    background: '#856f3a',
    color: '#0b0d12',
    fontWeight: '600',
    maxHeight: '30px',
    margin: '0 15px 10px 15px',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#89919a',
      color: '#0b0d12',
    },
  },

  checkBtn: {
    border: '1px solid #89919a',
    color: '#89919a',
    borderRadius: '15px',
    margin: '10px 0',
    padding: '7px 10px',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#89919a',
      color: '#0b0d12',
    },
  },

  image: {
    width: '100%',
    borderRadius: '10px',
  },

  paragraph: {
    color: '#89919a',
    margin: '20px 0',
  },
});

export default function ActionAreaCard() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography gutterBottom variant="h6" component="div" className={classes.title}>
        Top projects
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} sx={{ padding: '30px' }}>
          <Card className={classes.card}>
            <CardActionArea>
              <Typography gutterBottom variant="h6" component="div" className={classes.projectTitle}>
                Project 1
              </Typography>
              <div className={classes.content}>
                <CardContent>
                  <img src={project} alt="project" className={classes.image} />
                </CardContent>
                <Button className={classes.liveBtn}>See live</Button>
              </div>
            </CardActionArea>
          </Card>
          <div className={classes.paragraph}>
            <Typography variant="p">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non.
            </Typography>
          </div>
          <Button className={classes.checkBtn}>Check in GitHub</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ padding: '30px' }}>
          <Card className={classes.card}>
            <CardActionArea>
              <Typography gutterBottom variant="h6" component="div" className={classes.projectTitle}>
                Project 1
              </Typography>
              <div className={classes.content}>
                <CardContent>
                  <img src={project} alt="project" className={classes.image} />
                </CardContent>
                <Button className={classes.liveBtn}>See live</Button>
              </div>
            </CardActionArea>
          </Card>
          <div className={classes.paragraph}>
            <Typography variant="p">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non.
            </Typography>
          </div>
          <Button className={classes.checkBtn}>Check in GitHub</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ padding: '30px' }}>
          <Card className={classes.card}>
            <CardActionArea>
              <Typography gutterBottom variant="h6" component="div" className={classes.projectTitle}>
                Project 1
              </Typography>
              <div className={classes.content}>
                <CardContent>
                  <img src={project} alt="project" className={classes.image} />
                </CardContent>
                <Button className={classes.liveBtn}>See live</Button>
              </div>
            </CardActionArea>
          </Card>
          <div className={classes.paragraph}>
            <Typography variant="p">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non.
            </Typography>
          </div>
          <Button className={classes.checkBtn}>Check in GitHub</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
