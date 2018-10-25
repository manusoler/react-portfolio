import React, { Component } from "react";

class Bio extends Component {
  render() {
    return (
      <>
        <div className="bio-image" />
        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          {this.props.bio}
        </div>
      </>
    );
  }
}

export default Bio;
