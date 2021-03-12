import React, { Component } from "react";

class SingleProgramContent extends Component {
  render() {
    console.log(this.props.data);
    const { title } = this.props.data;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default SingleProgramContent;
