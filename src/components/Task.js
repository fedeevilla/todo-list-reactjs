import React, { Component, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

const card = {
  marginTop: 50,
  marginBottom: 50,
  minWidth: 220
};

const chip_done = {
  backgroundColor: "#DAF7A6"
};
const chip_pending = {
  backgroundColor: "#F1948A"
};

class Task extends Component {
  renderPriority = id => {
    if (id === 1) {
      return (
        <Fragment>
          <Chip label="Low" variant="outlined" />
        </Fragment>
      );
    } else if (id === 2) {
      return (
        <Fragment>
          <Chip label="Medium" variant="outlined" />
        </Fragment>
      );
    } else if (id === 3) {
      return (
        <Fragment>
          <Chip label="High" variant="outlined" />
        </Fragment>
      );
    }
  };

  renderId = id => {
    return <Chip label={`Task #${id}`} variant="outlined" />;
  };

  renderDone = done => {
    return (
      <Chip
        label={done ? `Done` : `Pending`}
        variant="outlined"
        style={done ? chip_done : chip_pending}
      />
    );
  };
  //style={this.props.task.is_done ? card_done : card}>
  render() {
    return (
      <Card style={card}>
        <CardContent>
          <div style={{ marginTop: 10 }}>
            {this.renderId(this.props.task.id)}{" "}
            {this.renderPriority(this.props.task.priority)}{" "}
            {this.renderDone(this.props.task.is_done)}
          </div>
          <Typography variant="h5" component="h2" style={{ margin: 20 }}>
            {this.props.task.name}
          </Typography>
          <Typography component="p">{this.props.task.description}</Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          {!this.props.task.is_done && (
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => this.props.handleDone(this.props.task.id)}
            >
              Done
            </Button>
          )}
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() =>
              window.confirm("Are you sure you wish to delete this task?") &&
              this.props.handleDelete(this.props.task.id)
            }
          >
            Delete
          </Button>
          }
        </CardActions>
      </Card>
    );
  }
}

export default Task;
