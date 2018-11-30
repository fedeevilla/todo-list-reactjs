import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./App.css";
import Task from "./components/Task";
import NewTask from "./components/NewTask";

const divStyle = {
  margin: 50
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    this.setState({ tasks: JSON.parse(localStorage.getItem("tasks")) || [] });
  }

  handleDone = id => {
    this.setState(
      {
        ...this.state,
        tasks: this.state.tasks.map(t => {
          if (t.id === id) {
            t.is_done = true;
          }
          return t;
        })
      },
      () => {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  handleDelete = id => {
    this.setState(
      {
        ...this.state,
        tasks: this.state.tasks.filter(t => t.id !== id)
      },
      () => {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  handleAddTask = task => {
    var max = 0;

    for (var i = 0; i < this.state.tasks.length; i++) {
      if (this.state.tasks[i].id > max) {
        max = this.state.tasks[i].id;
      }
    }

    task.id = max + 1;
    this.setState(
      {
        ...this.state,
        tasks: this.state.tasks.concat(task)
      },
      () => {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  render() {
    return (
      <div className="App" style={divStyle}>
        <Grid>
          <Row>
            <Col xs={12}>
              <NewTask handleAddTask={this.handleAddTask} />
            </Col>
          </Row>
          <Row>
            {this.state.tasks.map(t => {
              return (
                <Col xs={12} md={3} key={t.id}>
                  <Task
                    task={t}
                    key={t.id}
                    handleDone={this.handleDone}
                    handleDelete={this.handleDelete}
                  />
                </Col>
              );
            })}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
