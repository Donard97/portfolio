import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Button } from '@mui/material';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    height: 'auto',
    border: '1px solid #89919a',
    background: '#0e1117',
    color: '#89919a',
    borderRadius: '10px',
  },

  title: {
    margin: '15px',
    fontWeight: '600',
    letterSpacing: '1px',
  },

  content: {
    margin: '15px',
    border: '1px solid #89919a',
    background: '#0b0d12',
    borderRadius: '10px',
    bottom: 0,
  },

  liveBtn: {
    width: '100%',
    background: '#856f3a',
    color: '#0b0d12',
    fontWeight: '600',
    maxHeight: '30px',
  },

  checkBtn: {
    border: '1px solid #89919a',
    color: '#89919a',
    borderRadius: '15px',
    margin: '10px 0',
    padding: '7px 10px',
  },
});

export default function ActionAreaCard() {
  const classes = useStyles();
  return (
    <Box>
      <Card className={classes.root}>
        <CardActionArea>
          <Typography gutterBottom variant="h6" component="div" className={classes.title}>
            Project 1
          </Typography>
          <CardContent className={classes.content}>
            <Typography variant="body2" className="project-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Button className={classes.liveBtn}>See live</Button>
          </CardContent>
        </CardActionArea>
      </Card>
      <Button className={classes.checkBtn}>Check in GitHub</Button>
    </Box>
  );
}
