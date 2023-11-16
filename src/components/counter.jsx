import React, { Component } from "react";
import Counters from "./counters";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
    // tags: ["tag1", "tag2", "tag3"],
  };
  styles = {
    fontSize: 13,
    fontWeight: "bold",
  };

  //   constructor(){
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  render() {
    // console.log("props", this.props);
    return (
      <div>
        {/* {this.props.children} */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        {/* {this.getTags()}; */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  //   getTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    // console.log("button pressed");
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
}

export default Counter;
