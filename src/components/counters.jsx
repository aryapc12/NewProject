import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete} //called bubbling (not handling it in here, but in its parent comp.)
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            // value={counter.value}
            // id={counter.id}
            counter={counter} //if we have a new property to the counter obj as prop in future, we dont need to modify by this way
            //counter obj is carrying all the data about counter
          />
          /* <h4>Counter #{counter.id}</h4> */
        ))}
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
