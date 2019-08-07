import React, { Component } from 'react';
import './App.css';

const todoItems = [
  {
    id: 1,
    description: "Task 1",
    completed: true
  },
  {
    id: 2,
    description: 'Task 2',
    completed: false
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: todoItems
    };
  }

  displayCompleted = status => {
    if (status) {
      return this.setState({viewCompleted: true});
    }
    return this.setState({viewCompleted: false});
  }

  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span 
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >Complete
        </span>
        <span 
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >Incomplete
        </span> 
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state.viewCompleted;
    const newItems = this.state.todoList.filter(item => item.completed === viewCompleted);
    return newItems.map(item => (
      <li 
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
      <span
        className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`}
        title={item.description}
      > {item.title}
      </span>
      <span>
        <button className="btn btn-secondary mr-2">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </span>
      </li>
    ));
  }

  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Todo App</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button className="btn btn-primary">Add Task</button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
