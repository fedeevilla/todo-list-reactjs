import React, { Component } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import './App.css';
import Task from './components/Taks'
import axios from 'axios'

class App extends Component {

  constructor() {
    super();

    this.state = {
      loading: false,
      error: null,
      tasks: []
    }
  }

  componentDidMount() {
    this.setState(() => {
      return {
        loading: true
      }
    });
    
    axios.get(`http://localhost:3001/tasks`).then((response) => {
      
      this.setState(() => {
        return {
          loading: false,
          error: null,
          tasks: response.data,
        }
      });
    });

  }

  render() {
    return (
      <div className="App">
        <Grid >
          <Row >
            {
              this.state.tasks.map((t) => {
                return (
                  <Task task={t}> </Task>
                );
              })
            }
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
