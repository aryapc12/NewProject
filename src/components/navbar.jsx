import React, { Component } from "react";

//stateless functional component

const Navbar = (props) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Total number of items
          <span className="badge badge-pill badge-secondary m-2">
            {props.totalCounters}
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

// class Navbar extends Component {
//   render() {
//     return (

//     );
//   }
// }

// export default Navbar;
