import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const card = {
  backgroundColor: '#F1948A'
};

const card_done = {
  backgroundColor: '#DAF7A6'
};

class Task extends Component {


  render() {

    return (
      <Card styles={this.props.task.is_done ? { card_done } : { card }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Task #{this.props.task.id} - Priority: {this.props.task.priority}
          </Typography>
          <Typography variant="h5" component="h2">
            {this.props.task.name}
          </Typography>
          <Typography component="p">
            {this.props.task.description}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          {!this.props.task.is_done &&
            <Button variant="contained" color="primary" size="small" onClick={() => this.props.handleDone(this.props.task.id)}>DONE
           </Button>}
          <Button variant="contained" color="secondary" size="small" onClick={() => this.props.handleDelete(this.props.task.id)}>Delete
          </Button>}
        </CardActions>
      </Card>

    );
  }
}

Task.propTypes = {

  classes: PropTypes.object.isRequired,
};


export default Task;