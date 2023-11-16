import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    // console.log("event handler called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters }); //first counters -> state property, second counters -> new constant array (overriding the property)
    // this.setState({ counters }); //we can write like this as well
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            // value={counter.value}
            // id={counter.id}
            counter={counter} //if we have a new property to the counter obj as prop in future, we dont need to modify by this way
            //counter obj is carrying all the data about counter
          />
          /* <h4>Counter #{counter.id}</h4> */
        ))}
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
