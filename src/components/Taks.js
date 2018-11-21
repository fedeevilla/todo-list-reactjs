import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    margin: 20,
    backgroundColor: "#F1948A"
  },
  card_done: {
    minWidth: 275,
    margin: 20,
    backgroundColor: "#DAF7A6"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const Task = (props) => {
  const { classes } = props;

  return (
    <Card className={props.task.is_done ? classes.card_done : classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Task #{props.task.id}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.task.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Priority: {props.task.priority}
        </Typography>
        <Typography component="p">
          {props.task.description}
        </Typography>
      </CardContent>
      <CardActions>
        {!props.task.is_done &&
          <Button size="small" >DONE</Button>}
        <Button size="small" >DELETE</Button>
      </CardActions>
    </Card>
  );
}

Task.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Task);