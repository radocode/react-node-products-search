import React, { Component } from "react";

class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch("/api/tutorials")
      .then((res) => res.json())
      .then((list) => this.setState({ list }));
  };

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return (
                <div>
                  <div>{item.id}</div>
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                  <div>{item.published}</div>
                  <div>{item.createdAt}</div>
                  <div>{item.updatedAt}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )}
      </div>
    );
  }
}

export default List;
