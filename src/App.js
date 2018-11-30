import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./App.css";
import Task from "./components/Task";
import NewTask from "./components/NewTask";
import SearchAppBar from "./components/SearchAppBar";

const divStyle = {
  margin: 50
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      showing: []
    };
  }

  componentDidMount() {
    this.setState({
      tasks: JSON.parse(localStorage.getItem("tasks")) || [],
      showing: JSON.parse(localStorage.getItem("tasks")) || []
    });
  }

  handleDone = id => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map(t => {
        if (t.id === id) {
          t.is_done = true;
        }
        return t;
      })
    });

    this.handleShowing("");
  };

  handleDelete = id => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(t => t.id !== id)
    });

    this.handleShowing("");
  };

  handleAddTask = task => {
    var max = 0;

    for (var i = 0; i < this.state.tasks.length; i++) {
      if (this.state.tasks[i].id > max) {
        max = this.state.tasks[i].id;
      }
    }

    task.id = max + 1;
    this.setState({
      ...this.state,
      tasks: this.state.tasks.concat(task),
      showing: this.state.tasks.concat(task)
    });

    this.handleShowing("");
  };

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  }

  handleShowing = event => {
    let value = event.toLowerCase();
    this.setState(p => {
      return {
        showing: p.tasks.filter(e => {
          return e.name.toLowerCase().includes(value);
        })
      };
    });
  };

  render() {
    return (
      <Fragment>
        <SearchAppBar
          totalTasks={this.state.tasks.length}
          handleShowing={this.handleShowing}
          handleAddTask={this.handleAddTask}
        />
        <div className="App" style={divStyle}>
          <Grid>
            <Row>
              <Col xs={12}>
                <NewTask handleAddTask={this.handleAddTask} />
              </Col>
            </Row>
            <Row>
              {this.state.showing.length > 0 ? (
                this.state.showing.map(t => {
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
                })
              ) : (
                <Col xs={12}>
                  <h1>No tasks!</h1>
                </Col>
              )}
            </Row>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default App;
